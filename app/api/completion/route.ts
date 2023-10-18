import { HfInference } from "@huggingface/inference";
import { HuggingFaceStream, StreamingTextResponse } from "ai";
import { experimental_buildOpenAssistantPrompt } from "ai/prompts";

const huggingfaceInferenceKey: HfInference = new HfInference(
  process.env.API_ToKEN
);

export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  const contextualPrompt: string = `As per the Residential Tenancy Act in Nova Scotia, `;

  const { messages }: { messages: any } = await req.json();

  try {
    const res = await huggingfaceInferenceKey.textGenerationStream({
      model: `${process.env.AI_MODEL}`,
      inputs: experimental_buildOpenAssistantPrompt(messages),
      parameters: {
        max_new_tokens: 1000,
        // @ts-ignore (valide params for OpenAssitant models)
        typical_p: 0.2,
        repetition_penalty: 1,
        truncate: 1000,
        return_full_text: false,
      },
    });

    //@ts-ignore
    const stream = new HuggingFaceStream(res);

    return new StreamingTextResponse(stream, {
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    });
  } catch (err: unknown) {
    return new Response((err as Error).message, { status: 500 });
  }
}
