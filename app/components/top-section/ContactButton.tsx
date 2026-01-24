"use client";

import handleScrollIntoView from "@/lib/handleScroll";
import { Mail } from "lucide-react";

const ContactButton = () => {
  return (
    <button
      onClick={() => handleScrollIntoView("contact")}
      className="~text-xs/sm px-4 py-3 flex items-center gap-1 rounded-md text-primary border border-primary hover:bg-primary duration-150 hover:text-black"
    >
      <Mail className="size-4" /> <span>Contact Me</span>
    </button>
  );
};

export default ContactButton;
