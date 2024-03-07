import OpenAI from "openai";

const openai = new OpenAI();

async function getQuote() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Give me the quote of the day" }],
    model: "gpt-4",
    temperature: .9,
    // model: "gpt-3.5-turbo",
  });

  return completion;
}

export default async function Quote() {
  const response = await getQuote();

  console.log("completions", response.choices[0]);

  return (
    <div>
      <p>{response.choices[0].message.content}</p>
      {/* <p>Quote goes here</p> */}
    </div>
  );
}
