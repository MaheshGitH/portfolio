"use client";

import React from "react";
import Input from "./Input";
import sendMail from "../../../server-actions/sendMail";
import { useFormState } from "react-dom";
import TextArea from "./TextArea";

const Contact = () => {
  const [state, action] = useFormState(sendMail, { success: false });
  return (
    <div className="max-w-3xl w-full lg:self-end">
      <span className="hidden lg:inline-block">Send Me a Message</span>

      <form action={action} className="flex flex-col gap-8 w-full mt-8">
        <Input state={state.success} name="name">
          Your Name
        </Input>
        <Input state={state.success} name="email">
          Your Email
        </Input>
        <TextArea state={state.success}>Your Message</TextArea>
        <button
          type="submit"
          className="self-end bg-primary py-4 px-14 text-white rounded-lg hover:bg-primary/85 duration-150"
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default Contact;
