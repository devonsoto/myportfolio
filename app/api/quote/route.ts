import { NextResponse } from "next/server";
import OpenAI from "openai";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET() {
  console.log("----------------------");
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "Give me the quote of the day. Do not say anything else.",
      },
    ],
    model: "gpt-4-1106-preview",
  });

  console.log(completion.choices[0].message);
  const data = completion.choices[0].message;

  return NextResponse.json({ data });
}
