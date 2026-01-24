"use client";

import SendButton from "./SendButton";
import FormInput from "./FormInput";
import sendMail from "@/app/server-actions/sendMail";
import { useTransition } from "react";

const Form = () => {
  const [isPending, startTransition] = useTransition();

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      await sendMail(formData);
    });
  }
  return (
    <form
      action={onSubmit}
      className="w-full flex flex-col gap-4 items-center ~text-xs/sm "
    >
      <FormInput id="name" label="Name" placeholder="Your name" />
      <FormInput
        id="email"
        label="Email"
        placeholder="your.email@example.com"
      />
      <FormInput
        textarea
        id="message"
        label="Message"
        placeholder="Tell me about your project or opportunity..."
      />

      <div className="self-end max-md:w-full">
        <SendButton isPending={isPending} />
      </div>
    </form>
  );
};

export default Form;
