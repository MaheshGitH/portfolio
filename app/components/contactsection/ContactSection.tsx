import React from "react";
import Contact from "./Contact";
import Details from "./Details";
import Links from "./Links";
import Title from "../Title";

const ContactSection = () => {
  return (
    <div id="contactsection" className="flex flex-col gap-8">
      <span className="mb-8">
        <Title>Contact</Title>
      </span>
      <Details />
      <Links />
      <div>
        Designed by: <span className="font-stylish">Mahesh</span>
      </div>
      <Contact />
    </div>
  );
};

export default ContactSection;
