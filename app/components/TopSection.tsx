"use client";

import React from "react";
import Image from "next/image";
import Nav from "./Nav";
import { FaCircleHalfStroke } from "react-icons/fa6";

const TopSection = () => {
  const handleClick = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <header className="font-josefin-sans text-xl flex justify-between pt-8 pb-4 relative">
      <Image src="/logo.png" alt="Logo" priority width={75} height={37} />
      <div className="flex gap-2 justify-between items-center">
        <Nav />
        <button onClick={handleClick}>
          <FaCircleHalfStroke className="size-6 dark:fill-white" />
        </button>
      </div>
      <div className="fixed dark:bg-dark bg-light inset-0 -z-10 duration-200" />
    </header>
  );
};

export default TopSection;
