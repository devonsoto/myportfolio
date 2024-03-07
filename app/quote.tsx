import OpenAI from "openai";
import { revalidatePath } from "next/cache";

const openai = new OpenAI();

async function getQuote() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Give me the quote of the day" }],
    model: "gpt-4",
    temperature: 0.9,
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
