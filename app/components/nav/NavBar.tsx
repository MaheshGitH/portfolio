"use client";

import { useEffect, useState } from "react";
import AppLogo from "@/app/AppLogo";
import { CircleUserRound, Code, Cog, FolderOpenDot } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileSheet } from "./MobileSheet";
import NavButton from "./NavButton";

export const navButton = [
  { icon: Code, name: "About" },
  { icon: Cog, name: "Skills" },
  { icon: FolderOpenDot, name: "Projects" },
  { icon: CircleUserRound, name: "Contact" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed w-full max-w-full top-2 z-50 flex justify-center">
      <div
        className={cn(
          "flex justify-between items-center px-4 py-2 rounded-lg duration-300",
          scrolled
            ? "bg-surface shadow-md max-w-[1380px] w-full translate-y-4 scale-[0.97]"
            : "w-full translate-y-0 scale-100 max-w-[1520px] ",
        )}
      >
        <AppLogo />

        <nav className="max-md:hidden">
          {navButton.map((nb, index) => (
            <NavButton key={index} name={nb.name} />
          ))}
        </nav>

        <div className="md:hidden h-6">
          <MobileSheet />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
