"use client";

import React from "react";
import Input from "./Input";

const Contact = () => {
  return (
    <form
      action=""
      className="flex flex-col gap-8 dark:text-primary-light/60 mx-2"
    >
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
  );
};
export default Contact;
