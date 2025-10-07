import React from "react";
import ContactIcon from "./ContactIcon";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex gap-2 items-end ~sml/lg:~text-2xl/3xl mb-11">
        <ContactIcon />
        <span>Contact Info</span>
      </div>
      <div className="~sml/lg:~text-lg/xl">
        <p className="mb-6">
          Mail ID:{" "}
          <a href="mailto:maheshkrishnan@gmail.com" className="text-primary">
            MaheshKrishnan1242@gmail.com
          </a>
        </p>
        <p className="text-secondary-light">
          Let's connect — ideas, projects, or job opportunities, all welcome →
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
