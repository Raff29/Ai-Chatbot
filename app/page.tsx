"use client";
import { useChat } from "ai/react";
import { Button, Textarea } from "@nextui-org/react";
import LoadingButton from "./components/LoadingButton";
import SendButton from "./components/SendButton";

export default function Chat() {
  const { messages, isLoading, input, stop, handleInputChange, handleSubmit } =
    useChat({
      api: "/api/completion",
    });

  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <header className="p-4 bg-white border-b border-gray-300 shadow-md">
        AI Chatbot
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`whitespace-pre-wrap my-6 p-4 rounded-md shadow-md max-w-lg ${
              m.role === "assistant"
                ? "ml-4 bg-blue-50"
                : "mr-4 self-end bg-white text-blue-500"
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>

      <form
        className="border-t border-gray-300 bg-white p-4 flex items-center shadow-inner"
        onSubmit={handleSubmit}
      >
        <Textarea
          className="flex-grow rounded-md mr-2"
          placeholder="Type here..."
          value={input}
          onChange={handleInputChange}
          fullWidth
        />
        <div className="flex flex-col gap-2">
          <Button onClick={stop} color="danger" className="hidden">
            Stop
          </Button>
          {isLoading ? (
            <LoadingButton />
          ) : (
            <SendButton/>
          )}
        </div>
      </form>
    </div>
  );
}
