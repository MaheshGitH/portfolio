import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div className="text-black items-center flex gap-5">
      <BsTwitterX className=" size-8 cursor-pointer" />
      <IoLogoGithub className=" size-9 cursor-pointer" />
      <BsLinkedin className=" size-8 cursor-pointer" />
    </div>
  );
};

export default SocialIcons;
