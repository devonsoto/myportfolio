import OpenAI from "openai";
import { revalidatePath } from "next/cache";

const openai = new OpenAI();

async function getQuote() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Give me the quote of the day, choose from it either being funny, about love, inspiration, AI, motivation, old school or whatever you can come up with. Only return the quote and who it is by.",
      },
    ],
    model: "gpt-4",
    temperature: 2,
    // model: "gpt-3.5-turbo",
  });

  return completion;
}

const Quote = async () => {
  const response = await getQuote();
  const quote = response.choices[0].message.content;

  console.log("completions", response.choices[0]);

  revalidatePath("/birthday", "layout");

  return (
    <>
      <p>Here is a random quote from our AI friend...</p>
      <p>{quote}</p>
    </>
  );
};

export default Quote;
