"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Nav from "./Nav";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";

const TopSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navState]);

  return (
    <header
      className={`font-josefin-sans text-xl flex justify-between w-full sticky after:content-[''] after:absolute after:inset-0 after:backdrop-blur-sm after:-z-10 z-10 px-2 ${
        isScrolled
          ? " top-2 after:bg-white/5 py-4 left-2 right-2 after:rounded-lg after:border after:border-white/20"
          : " bg-white/0 top-0 pt-10 pb-2 left-0 border-white/20"
      }  duration-200`}
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
    </header>
  );
};

export default TopSection;
