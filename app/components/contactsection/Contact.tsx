"use client";

import React, { useState } from "react";
import Input from "./Input";
import sendMail from "../../../server-actions/sendMail";
import TextArea from "./TextArea";
import SendButton from "./SendButton";
import ToastNotification from "./ToastNotification";

const Contact = () => {
  const [state, setState] = useState(false);

  return (
    <div className="max-w-3xl w-full lg:self-end">
      <span>Send Me a Message</span>

      <form action={sendMail} className="flex flex-col gap-8 w-full mt-8">
        <Input state={state} name="name">
          Your Name
        </Input>
        <Input state={state} name="email">
          Your Email
        </Input>
        <TextArea state={state}>Your Message</TextArea>
        <SendButton
          isPending={(value) => {
            setState(value);
          }}
        />
      </form>
      <ToastNotification isPending={state} />
    </div>
  );
};
export default Contact;
