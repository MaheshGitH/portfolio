"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Props {
  children: string;
}

const Title = ({ children }: Props) => {
  const [darkMode, SetDarkMode] = useState(true);

  useEffect(() => {
    const checkDarkMode = () => {
      SetDarkMode(document.body.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <h2 className="flex flex-col gap-1 w-fit select-none text-3xl font-stylish mb-8">
      {children}
      <motion.span
        initial={{
          background: `linear-gradient(90deg, #32B621 0% , #${
            darkMode ? "0B0A0D" : "EEEDEF"
          } 0%`,
        }}
        animate={{
          background: `linear-gradient(90deg, #32B621 0% , #${
            darkMode ? "0B0A0D" : "EEEDEF"
          } 90%`,
        }}
        transition={{
          duration: 2,
          ease: "backOut",
        }}
        className="h-0.5 -mt-1 rounded"
      />
      <motion.span
        initial={{
          background: `linear-gradient(90deg, #32B621 0% , #${
            darkMode ? "0B0A0D" : "EEEDEF"
          } 0%`,
        }}
        animate={{
          background: `linear-gradient(90deg, #32B621 0% , #${
            darkMode ? "0B0A0D" : "EEEDEF"
          } 50%`,
        }}
        transition={{
          duration: 1,
          ease: "backOut",
        }}
        className="h-0.5 rounded"
      />
    </h2>
  );
};

export default Title;
