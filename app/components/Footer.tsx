import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
		<div className="flex flex-col justify-center w-full my-4">
			<div className="flex items-center justify-center my-2">
      <span>Built with</span>
				<a
					href="https://huggingface.co/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5"
					className="flex items-center mx-1 font-medium underline transition-colors underline-offset-4 hover:text-black/70"
				>
					<p>Open-Assistant SFT-4 12B Model</p>
				</a>
				<div className="mr-1">and</div>
        <a
					href="https://nextjs.org/"
					className="flex items-center font-medium underline transition-colors underline-offset-4 hover:text-black/70"
				>
					<img src="/next.svg" className="h-2 my-2" alt="next.js logo" />
          <p>Next.js</p>
          </a>
				 .
      </div>
      <div className="flex flex-col items-center justify-center">
				<a
					href="https://github.com/Raff29/rental-ai"
					className="flex items-center font-medium underline transition-colors underline-offset-4 hover:text-black/70"
				>
					<img src="/github.svg" alt="GitHub Logo" className="h-4" />
					<p className="ml-1">Source</p>
				</a>
			</div>
    </div>
  );
}
