import React from "react";
import Contact from "./Contact";
import Details from "./Details";
import Links from "./Links";

const ContactSection = () => {
  return (
    <div className="flex flex-col gap-8 mt-32 ml-4">
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
