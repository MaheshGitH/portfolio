"use client";

import React from "react";
import Image from "next/image";
import Nav from "./Nav";

const TopSection = () => {
  const handleClick = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <header className="font-josefin-sans text-xl flex justify-between px-4 pt-8 pb-4 relative">
      <Image src="/logo.png" alt="Logo" priority width={75} height={37} />
      <div className="flex gap-2 justify-between items-center">
        <Nav />
        <button onClick={handleClick}>
          <svg
            className="dark:fill-white size-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z" />
          </svg>
        </button>
      </div>
      <div className="fixed dark:bg-dark bg-light inset-0 -z-10 duration-200" />
    </header>
  );
};

export default TopSection;
