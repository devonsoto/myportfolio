require("dotenv").config();
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

const model = new ChatOpenAI({
  model: "gpt-3.5-turbo",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const getQuote = async () => {
  const res = await model.invoke([
    new HumanMessage({
      content:
        "Hello, can you return a quote followed by who said such quote. It can be inspirational, motivational, historic and futuristic.",
    }),
  ]);
  return res;
};
