import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div className="text-black items-center flex gap-5 md:gap-10 duration-150">
      <button className="relative">
        <BsTwitterX className="size-7 lg:size-8 peer hover:text-black/70 duration-200" />
        <span className="h-0.5 rounded-md -bottom-1 left-0 w-0 absolute bg-white peer-hover:w-7 lg:peer-hover:w-8 duration-200" />
      </button>

      <button className="relative">
        <IoLogoGithub className="size-8 lg:size-9 peer hover:text-black/70 duration-200" />
        <span className="h-0.5 rounded-md -bottom-1 left-0 w-0 absolute bg-white peer-hover:w-8 lg:peer-hover:w-9 duration-200" />
      </button>
      <button className="relative">
        <BsLinkedin className="size-7 lg:size-8 peer hover:text-black/70 duration-200" />
        <span className="h-0.5 rounded-md -bottom-1 left-0 w-0 absolute bg-white peer-hover:w-7 lg:peer-hover:w-8 duration-200" />
      </button>
    </div>
  );
};

export default SocialIcons;
