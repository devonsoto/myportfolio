"use client";
import { getQuote } from "@/lib/ai";

const quote = getQuote();

export const Whoami = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center space-y-10 p-6">
      <div className=" flex h-full w-full max-w-2xl   flex-col items-center justify-center gap-6">
        <p className=" flex text-4xl dark:text-white">
          Hello, my name is Devon Soto.
        </p>
        <p className="dark:text-white">
          I am a Software Engineer with a passion for creating and building
          software.
        </p>
      </div>
      {quote && <div>{quote}</div>}
    </div>
  );
};
