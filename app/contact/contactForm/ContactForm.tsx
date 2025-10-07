import Input from "../contactForm/Input";
import React from "react";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  return (
    <div className="absolute bottom-0 max-xl:left-2 right-2 flex justify-center bg-design-dark rounded-t-lg border-t border-x border-primary ">
      <form className="px-8 py-4 xl:py-20 xl:px-16">
        <div className="flex flex-col items-end">
          <Input eg="e.g. Mahesh">Name</Input>
          <Input eg="e.g. example@mail.com">Email</Input>
          <Input textarea eg="Lets work together on something awesome…">
            Message
          </Input>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
