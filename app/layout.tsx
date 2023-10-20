import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ai Chatbot",
  description:
    "A web application that allows users to chat with an AI assistant powered by Next.js and OpenAssistant. The assistant can answer questions, generate content, and provide useful information.",
  keywords: ["Next.js", "React", "JavaScript", "AI"],
  creator: "Raphael Pinto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/vercel.svg" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
