"use client";
import { useEffect, useState } from "react";
import { getQuote } from "@/lib/ai";

export const Whoami = () => {
  const [quote, setQuote] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getQuote()
      .then((res) => {
        setQuote(res.content as string);
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => setIsLoading(false));
  }, []);

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
      {isLoading && <div>Loading...</div>}
      {quote && <div>{quote}</div>}
    </div>
  );
};
