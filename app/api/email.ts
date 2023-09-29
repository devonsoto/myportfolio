// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { error } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
import * as postmark from "postmark";

// console.log(process.env.)
const serverToken = process.env.postmarkToken || "";
// console.log(serverToken);

let client = new postmark.ServerClient(serverToken);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { name, email, message } = req.body;

  const data = {
    name,
    email,
    message,
  };

  console.log(data);

  client
    .sendEmail({
      From: "devon@devonsoto.com",
      To: "online.devon@gmail.com",
      Subject: `You may have a client from ${email}`,
      HtmlBody: message,
    })
    .then((response) => {
      console.log("Sending message");
      console.log(response.To);
      console.log(response.Message);
      res.status(200).json({ name: "John Doe" });
    })
    .catch((error) => {
      console.log(error);
      console.log("There seemed it be in error, try again soon");
    });
}
