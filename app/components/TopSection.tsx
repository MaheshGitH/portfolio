"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Nav from "./Nav";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";

const TopSection = () => {
  const [navState, setNavState] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleDarkToggle = () => {
    document.body.classList.toggle("dark");
  };

  const toggleNavState = () => {
    setNavState((prev) => !prev);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setNavState(false);
    }
  };

  useEffect(() => {
    if (navState) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navState]);

  return (
    <header
      id="topsection"
      className="font-josefin-sans text-xl flex justify-between pt-8 pb-4 relative"
    >
      <Image src="/logo.png" alt="Logo" priority width={75} height={37} />
      <div className="flex gap-8 justify-between items-center relative">
        <button onClick={handleDarkToggle}>
          <FaCircleHalfStroke className="size-6 dark:fill-white" />
        </button>

        <div ref={navRef} className="relative h-8">
          <button
            onClick={() => {
              toggleNavState();
            }}
          >
            <CgMenuRightAlt className="size-8 dark:fill-white" />
          </button>

          <Nav setNavState={() => toggleNavState()} navState={navState} />
        </div>
      </div>
      <div className="fixed dark:bg-dark bg-light inset-0 -z-10 duration-200" />
    </header>
  );
};

export default TopSection;
