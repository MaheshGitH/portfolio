import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const BottomSection = () => {
  return (
    <div>
      <h1 className="text-center mt-2">
        Hi, I'm &nbsp;
        <span className="font-stylish bg-gradientLight dark:bg-gradient dark:text-white rounded-lg py-2 px-6 ">
          Mahesh krishnan
        </span>
        &nbsp; , a software developer who turns complex problems into simple,
        functional solutions.
      </h1>
      <div className="flex justify-center gap-8 mt-20">
        <FaXTwitter className="size-8" />

        <IoLogoGithub className="size-8" />
        <FaLinkedin className="size-8" />
      </div>
    </div>
  );
};

export default BottomSection;
