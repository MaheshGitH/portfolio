import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
}

const LinkLayout = ({ children, href }: Props) => {
  return (
    <Link
      className="relative text-white dark:hover:text-white/70 duration-200 group"
      href={href}
    >
      {children}
      <span className="absolute bg-white -bottom-1 left-1/2 right-1/2 h-0.5 group-hover:left-0 group-hover:right-0 duration-300 rounded-lg ease-out" />
    </Link>
  );
};

export default LinkLayout;
