"use client";

import React from "react";
import Input from "./Input";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gradient ml-10 rounded-t-2xl py-10 px-16">
      <form
        action=""
        className="flex flex-col gap-8 dark:text-primary-light/60"
      >
        <Input varient="input">Name</Input>
        <Input varient="input">Email</Input>
        <Input varient="textarea">Type your message</Input>
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
