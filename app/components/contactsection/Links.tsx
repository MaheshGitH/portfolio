import React from "react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import LinkLayout from "./LinkLayout";

const Links = () => {
  return (
    <div className="flex gap-12 h-fit">
      <LinkLayout href="https://x.com/xyzmahesh">
        <FaXTwitter className="size-8" />
      </LinkLayout>

      <LinkLayout href="https://github.com/MaheshGitH">
        <IoLogoGithub className="size-8" />
      </LinkLayout>

      <LinkLayout href="https://www.linkedin.com/in/ImMahesh">
        <FaLinkedin className="size-8" />
      </LinkLayout>
    </div>
  );
};

export default Links;
