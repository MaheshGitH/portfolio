import React from "react";
import ContactInfo from "./ContactInfo";
import Socials from "./Socials";
import ContactForm from "./contactForm/ContactForm";

const page = () => {
  return (
    <div className="pt-56 px-2 h-screen max-w-[87.188rem] mx-auto relative flex">
      <div>
        <ContactInfo />
        <Socials />
      </div>
      <ContactForm></ContactForm>
      <div className="absolute bottom-10 right-14 w-full h-[540px] max-w-4xl max-xl:hidden flex justify-center bg-primary/[0.07] rounded-lg -z-20" />
    </div>
  );
};

export default page;
