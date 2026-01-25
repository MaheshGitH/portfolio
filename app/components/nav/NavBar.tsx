"use client";

import { useEffect, useState } from "react";
import AppLogo from "@/app/AppLogo";
import { CircleUserRound, Code, Cog, FolderOpenDot } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileSheet } from "./MobileSheet";
import NavButton from "./NavButton";
import HoverEffectContainer from "@/app/common-components/HoverEffectContainer";
import handleScrollIntoView from "@/lib/handleScroll";

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
    <div
      className={cn(
        "fixed w-full max-w-full top-2 z-50 flex justify-center duration-200",
        scrolled ? "px-3 top-3" : "px-0 top-2",
      )}
    >
      <HoverEffectContainer
        radius={150}
        className={cn(
          "max-w-[1380px] w-full",
          scrolled ? "rounded-lg" : "rounded-none",
        )}
      >
        <div
          className={cn(
            "flex justify-between items-center px-4 py-2 duration-300 border-border",
            scrolled
              ? "bg-background shadow-md max-w-[1380px] w-full rounded-lg border"
              : "w-full scale-100 max-w-[1520px] bg-black border-b",
          )}
        >
          <button onClick={() => handleScrollIntoView("top")}>
            <AppLogo />
          </button>

          <nav className="max-md:hidden">
            {navButton.map((nb, index) => (
              <NavButton key={index} name={nb.name} />
            ))}
          </nav>

          <div className="md:hidden h-6">
            <MobileSheet />
          </div>
        </div>
      </HoverEffectContainer>
    </div>
  );
};

export default NavBar;
