"use client";

import Input from "./Input";
import React from "react";
import { PersonIcon, MailIcon } from "./Icons";
import Send from "./Send";
import TextArea from "./TextArea";
import contactForm from "../../../server-actions/contactForm";
import { useFormState } from "react-dom";

const Form = () => {
  const [state, action] = useFormState(contactForm, { success: false });

  return (
    <form
      action={action}
      className="flex flex-col gap-6 w-96 md:w-[500px] duration-500 min-w-64 px-4 "
    >
      <Input success={state.success} icon={<PersonIcon />} name="name">
        Name
      </Input>

      <Input success={state.success} icon={<MailIcon />} name="email">
        Email
      </Input>
      <TextArea success={state.success} />
      <Send />
    </form>
  );
};

export default Form;
