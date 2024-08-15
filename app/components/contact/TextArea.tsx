"use client";

import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const TextArea = ({ success }: { success: boolean }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const textRef = useRef<HTMLTextAreaElement>(null);
  const inView = useInView(textRef, { amount: 1, once: true });

  useEffect(() => {
    if (!textRef) return;
    if (!inView) return;
    if (success) setValue("");

    textRef.current.focus();
  }, [textRef, inView, success]);

  return (
    <div className="flex items-center gap-3">
      <span className="size-8 duration-500" />
      <div className="relative w-full">
        <motion.label
          htmlFor="message"
          className={`absolute cursor-text px-1 ${
            isFocused || value ? "bg-rest" : " bg-transparent "
          }`}
          initial={{
            scale: 1,
            top: 8,
            left: 15,
            color: "#cbcbcb",
          }}
          animate={{
            scale: isFocused || value ? 0.9 : 1,
            top: isFocused || value ? -12 : 8,
            left: isFocused || value ? 12 : 15,
            color: isFocused || value ? "#ffffff" : "#cbcbcb",
          }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          Your message
        </motion.label>
        <textarea
          id="message"
          value={value}
          ref={textRef}
          name="message"
          required
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`px-4 py-2 ml-0.5 w-full focus:outline-none bg-transparent border h-60 text-white ${
            isFocused ? " border-white " : " border-accent "
          } rounded-xl duration-500 resize-none`}
        />
      </div>
    </div>
  );
};

export default TextArea;
