"use client";

import HoverEffectContainer from "@/app/common-components/HoverEffectContainer";
import { useActiveSection } from "@/app/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Props {
  Icon?: LucideIcon;
  name: string;
  onClick?: () => void;
}

const NavButton = ({ Icon, name, onClick }: Props) => {
  const { activeSection, setActiveManually } = useActiveSection([
    "about",
    "skills",
    "projects",
    "contact",
  ]);
  const handleNavClick = (id: string) => {
    setActiveManually(id);

    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Small screen */}
      <HoverEffectContainer className="rounded-md inline-block">
        <button
          onClick={() => {
            handleNavClick(name.toLocaleLowerCase());
            onClick?.();
          }}
          className={cn(
            "w-full text-start p-4 rounded-md ~text-xs/sm flex gap-2 items-center md:hidden",
            activeSection === name.toLocaleLowerCase()
              ? "bg-surface text-primary"
              : " bg-background ",
          )}
        >
          {Icon && <Icon className="~size-4/5" />}
          <span className="-mb-1">{name}</span>
        </button>
      </HoverEffectContainer>

      {/* Big screen */}

      <button
        onClick={() => handleNavClick(name.toLocaleLowerCase())}
        className={cn(
          "px-4 py-3 hover:bg-surface ~text-xs/sm max-md:hidden",
          activeSection === name.toLocaleLowerCase()
            ? " border-b border-primary text-primary rounded-none rounded-t-md "
            : " border-none text-white rounded-md",
        )}
      >
        {name}
      </button>
    </>
  );
};

export default NavButton;
