"use server";

import { Resend } from "resend";
import MailTemplate from "./MailTemplate";

interface FormState {
  success: boolean;
}

export default async function contactForm(
  state: FormState,
  formData: FormData
) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL,
    subject: "Portfolio. Review message",
    react: MailTemplate({
      authorName: String(name),
      authorEmail: String(email),
      message: String(message),
    }),
  });

  return {
    success: true,
  };
}
