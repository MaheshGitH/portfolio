"use server";

import { Resend } from "resend";
import MailTemplate from "./MailTemplate";

export default async function sendMail(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL;

  if (!apiKey || !from || !to) {
    return { success: false, error: "Server misconfigured" };
  }

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { success: false, error: "Missing fields" };
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to,
      subject: "Portfolio. Review message",
      react: MailTemplate({
        authorName: String(name),
        authorEmail: String(email),
        message: String(message),
      }),
    });

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Email failed" };
  }
}
