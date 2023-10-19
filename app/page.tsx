"use client";
import { useChat } from "ai/react";
import { Divider, Textarea } from "@nextui-org/react";
import LoadingButton from "./components/LoadingButton";
import SendButton from "./components/SendButton";
import { useEffect, useRef } from "react";
import { ThemeSwitch } from "./components/ThemeSwitcher";
import Footer from "./components/Footer";

export default function Chat() {
  const { messages, isLoading, input, handleInputChange, handleSubmit } =
    useChat({
      api: "/api/completion",
    });

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className=" h-screen flex flex-col">
      <div className="p-4 grid grid-col-5 grid-flow-col shadow-md justify-between">
        <div className="grid col-start-3 col-span-1 items-center ">
          AI Chatbot
        </div>
        <div className="grid col-start-5 col-span-1 items-center">
          <ThemeSwitch />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col flex-1 overflow-y-auto p-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`whitespace-pre-wrap my-6 p-4 rounded-md shadow-md max-w-lg ${
              m.role === "assistant"
                ? "ml-4 bg-grey-200"
                : "mr-4 self-end bg-blue-400 text-white"
            }`}
          >
            {m.content}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div>
        <Divider />
      </div>
      <form
        className=" p-4 flex items-center shadow-inner"
        onSubmit={handleSubmit}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
      >
        <Textarea
          className="flex-grow rounded-md mr-2"
          placeholder="Type here..."
          value={input}
          onChange={handleInputChange}
          fullWidth
        />
        <div className="flex flex-col gap-2">
          {isLoading ? <LoadingButton /> : <SendButton />}
        </div>
      </form>
      <div>
        <Divider />
      </div>
      <Footer />
    </div>
  );
}
