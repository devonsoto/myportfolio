import OpenAI from "openai";
import { revalidatePath } from "next/cache";
import { ChatCompletion } from "openai/resources";

const openai = new OpenAI();

async function getQuote() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Give me the quote of the day, choose from it either being funny, about love, inspiration, AI, motivation, old school or whatever you can come up with. Only return the quote and who it is by. Make sure it is 1-2 sentences.",
        },
      ],
      model: "gpt-4",
      temperature: 1.5,
      // model: "gpt-3.5-turbo",
    });
    return completion;
  } catch {
    console.log("error getting quote");
    return null;
  }
}

const Quote = async () => {
  const response = await getQuote();
  const quote = response && response.choices[0].message.content;

  console.log("completions", response && response.choices[0]);

  // revalidatePath("/birthday", "layout");

  return (
    <>
      <p>Here is a random quote from our AI friend...</p>
      <p>{quote || "Hmm sometihing is off try later 😅"}</p>
    </>
  );
};

export default Quote;
