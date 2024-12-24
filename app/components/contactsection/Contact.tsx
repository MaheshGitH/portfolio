"use client";

import React from "react";
import Input from "./Input";

const Contact = () => {
  return (
    <div className="max-w-3xl w-full lg:self-end">
      <span className="hidden lg:inline-block">Send Me a Message</span>

      <form action="" className="flex flex-col gap-8 w-full mt-8">
        <Input varient="input">Your Name</Input>
        <Input varient="input">Your Email</Input>
        <Input varient="textarea">Your Message</Input>
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
