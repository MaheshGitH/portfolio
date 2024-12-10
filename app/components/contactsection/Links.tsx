import React from "react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

const Links = () => {
  return (
    <div className="flex gap-20">
      <FaXTwitter className="size-6" />

      <IoLogoGithub className="size-6" />
      <FaLinkedin className="size-6" />
    </div>
  );
};

export default Links;
