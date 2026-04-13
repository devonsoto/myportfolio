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
  captchaToken: string,
) => {
  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: captchaToken,
      }),
    }
  );
  const verifyData = await verifyRes.json();
  if (!verifyData.success) throw new Error("CAPTCHA verification failed");

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
