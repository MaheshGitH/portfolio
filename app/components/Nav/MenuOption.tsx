import React, { useEffect, useState } from "react";
import toggleDark from "./toggleDark";
import ThemeButton from "./ThemeButton";

interface Props {
  Open: (value: boolean) => void;
}

interface MenuOptions {
  href: string;
  name: string;
}

const MenuOption = ({ Open }: Props) => {
  const options: MenuOptions[] = [
    { href: "/", name: "Home" },
    { href: "skills", name: "Skills" },
    { href: "projects", name: "Projects" },
    { href: "contact", name: "Contact" },
  ];

  return (
    <div>
      <div className="flex justify-between absolute top-20 max-md:left-4 right-4 lg:right-20  font-josefin-sans text-secondary-light duration-200">
        <span className="md:hidden">
          <ThemeButton />
        </span>
        <button onClick={() => Open(false)} className="flex gap-2">
          <svg
            className="~sml/lg:~size-4/[1.125rem] mt-1"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 19L19 3M19 19L11 11L3 3"
              stroke="#2373EB"
              strokeWidth="5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hover:text-black dark:hover:text-primary-dark duration-200">
            Close
          </span>
        </button>
      </div>
      <ul className="flex flex-col justify-center h-screen gap-20  font-stylish ~sml/lg:~text-4xl/[2.5rem] text-secondary-light">
        {options.map((option, index) => (
          <li key={index}>
            <a
              className="hover:text-black dark:hover:text-primary-dark w-full text-center inline-block duration-200"
              href={option.href}
            >
              {option.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOption;
