"use client";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: string;
}

const Title = ({ children }: Props) => {
  const [darkMode, SetDarkMode] = useState(true);

  const h2Ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(h2Ref, { once: true, amount: 1 });

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
    <h2
      ref={h2Ref}
      className="flex flex-col gap-1 w-fit select-none ~sm/lg:~text-3xl/4xl font-stylish mb-16"
    >
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
