"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Props {
  children: string;
}

const CustomTitle = ({ children }: Props) => {
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
    <h3 className="flex flex-col w-fit gap-1">
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
    </h3>
  );
};

export default CustomTitle;
