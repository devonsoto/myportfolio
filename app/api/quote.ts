import OpenAI from "openai";

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request: Request) {
  console.log("GET request", request);

  return new Response("Hello world!");

  // const openai = new OpenAI();

  // const completion = await openai.chat.completions.create({
  //   messages: [{ role: "system", content: "Give me the quote of the day" }],
  //   model: "gpt-4",
  //   response_format: { type: "json_object" },
  // });

  // console.log(completion);
}
