import React from "react";
import Wave from "./Wave";
import Form from "./Form";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="mt-px bg-radial text-white flex flex-col items-center"
    >
      <h3 className="font-medium text-xl md:text-2xl xl:text-3xl pt-10 pb-14 duration-500">
        Contact
      </h3>
      <p className="text-center max-w-md lg:max-w-lg mb-14 lg:mb-32 lg:text-lg duration-500 px-2 lg:px-0">
        "Thank you for checking out my portfolio. If you have any questions,
        comments, or opportunities, please feel free to send me an email. Your
        feedback is greatly appreciated."
      </p>
      <Form />
      <Wave />
    </footer>
  );
};

export default Contact;
