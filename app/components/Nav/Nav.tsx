"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import ThemeButton from "./ThemeButton";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex flex-col fixed left-2 right-2 max-w-[87.188rem] mx-auto sml:flex-row justify-between items-center mt-[4.625rem] ${
        isScrolled
          ? " shadow-light dark:shadow-dark mt-16 bg-dark p-2 rounded-lg "
          : ""
      } duration-150 ~sml/lg:~text-xl/2xl z-[60]`}
    >
      <Logo />
      <Menu />
      <span className="max-md:hidden text-xl">
        <ThemeButton />
      </span>
    </nav>
  );
};

export default Nav;
