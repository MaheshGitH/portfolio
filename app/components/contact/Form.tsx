"use client";

import Input from "./Input";
import React from "react";
import { PersonIcon, MailIcon } from "../Icons";
import Send from "./Send";
import TextArea from "./TextArea";
import contactForm from "../../../server-actions/contactForm";
import { useFormState } from "react-dom";
import Tost from "./Tost";

const Form = () => {
  const [state, action] = useFormState(contactForm, { success: false });

  return (
    <form
      action={action}
      className="flex flex-col gap-11 w-96 md:w-[500px] duration-500 min-w-64 px-4"
    >
      <Input success={state.success} icon={<PersonIcon />} name="name">
        Name
      </Input>

      <Input success={state.success} icon={<MailIcon />} name="email">
        Email
      </Input>
      <TextArea success={state.success} />
      <Send />
      <Tost success={state.success} />
    </form>
  );
};

export default Form;
