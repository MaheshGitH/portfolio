import Input from "../contactForm/Input";
import React from "react";
import SubmitButton from "./SubmitButton";
import sendMail from "../../../server-actions/sendMail";

const ContactForm = () => {
  return (
    <div className="absolute bottom-0 max-xl:left-2 right-2 flex justify-center bg-design-dark rounded-t-lg border-t border-x border-primary ">
      <form action={sendMail} className="px-8 py-4 xl:py-20 xl:px-16">
        <div className="flex flex-col items-end">
          <Input name="name" eg="e.g. Mahesh">
            Name
          </Input>
          <Input name="email" eg="e.g. example@mail.com">
            Email
          </Input>
          <Input
            name="message"
            textarea
            eg="Lets work together on something awesome…"
          >
            Message
          </Input>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
