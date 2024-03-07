// import { EmailTemplate } from "@/components/emailTemplate";
// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request, res: NextResponse) {
//   try {
//     const requestInfo = await req.json();
//     console.log(requestInfo);

//     const data = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["online.devon@gmail.com"],
//       subject: "Hello world",
//       text: "Hello world",
//       react: EmailTemplate({
//         artist: "Arlissa",
//         track: "I hate Giving you everything",
//       }),
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }
