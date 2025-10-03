import React from "react";
import { FaArrowDown } from "react-icons/fa";

interface Props {
  children: string;
  href: string;
}

const NextPage = ({ children, href }: Props) => {
  return (
    <a
      href={href}
      className="flex items-center w-fit rounded-full bg-primary/[0.07] ~sml/lg:~text-xs/base mt-16 md:mt-40 mx-auto mb-10 py-2 pl-8 pr-16 border-2 border-primary text-primary group cursor-pointer relative duration-200"
    >
      <span>{children}</span>
      <FaArrowDown className="-rotate-90 absolute right-8 group-hover:right-6 duration-200" />
    </a>
  );
};

export default NextPage;
