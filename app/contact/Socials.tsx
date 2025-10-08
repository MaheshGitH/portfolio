import React from "react";
import { VscGithub } from "react-icons/vsc";
import LinkedInIcon from "./LinkedInIcon";
import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";
const Socials = () => {
  return (
    <div className="flex flex-col gap-6 mt-12 font-stylish">
      <Link
        target="_blank"
        href="https://github.com/MaheshGitH/"
        className="flex gap-2 items-end text-primary w-fit"
      >
        <VscGithub className="~sml/lg:~size-6/7 text-black dark:text-white" />
        MaheshGitH
        <RiExternalLinkLine className="mb-[6px]" />
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/naanmaheshkrishnan/"
        className="flex gap-2 items-end text-primary w-fit"
      >
        <LinkedInIcon />
        NaanMaheshKrishnan
        <RiExternalLinkLine className="mb-[6px]" />
      </Link>
    </div>
  );
};

export default Socials;
