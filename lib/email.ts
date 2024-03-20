"use server";

import { EmailTemplate } from "@/components/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendInfoEmail = async (artist: string, track: string) => {
  const response = await resend.emails.send({
    from: "devon@devonsoto.com",
    to: ["online.devon@gmail.com"],
    subject: "Hello world",
    text: "Hello world",
    react: EmailTemplate({
      artist,
      track,
    }),
  });

  return response;
};

export const SendContactEmail = async (
  name: string,
  email: string,
  message: string,
) => {
  const response = await resend.emails.send({
    from: "contact@devonsoto.com",
    to: ["online.devon@gmail.com"],
    subject: "Hello world",
    text: "Hello world",
    react: EmailTemplate({
      name,
      email,
      message,
    }),
  });

  return response;
};
