"use client";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: string;
}

const CustomTitle = ({ children }: Props) => {
  const [darkMode, SetDarkMode] = useState(true);

  const h3Ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(h3Ref, { once: true, amount: 1 });

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
    <h3 ref={h3Ref} className="flex flex-col w-fit gap-1">
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
          } ${isInView ? "90%" : "0%"}`,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        className="h-0.5 -mt-1 rounded"
      />
    </h3>
  );
};

export default CustomTitle;
