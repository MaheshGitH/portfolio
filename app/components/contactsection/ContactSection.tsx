import React from "react";
import Contact from "./Contact";
import Details from "./Details";
import Links from "./Links";
import Title from "../Title";

const ContactSection = () => {
  return (
    <div id="Contact" className="flex flex-col mb-32 relative">
      <Title>Contact</Title>
      <div className="flex flex-col max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-8 mb-8">
          <Details />
          <Links />
          <div className="text-nowrap h-fit">
            Designed by: <span className="font-stylish">Mahesh</span>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default ContactSection;
