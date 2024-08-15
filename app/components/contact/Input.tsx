import { motion } from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  icon: ReactNode;
  name: string;
  success: boolean;
}

const Input = ({ children, icon, name, success }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef) return;
    if (success) setValue("");
  }, [inputRef, success]);

  return (
    <div className="flex items-center gap-3">
      <span
        onClick={() => inputRef.current.focus()}
        className={`size-8 inline-block duration-500  ${
          isFocused || value ? " stroke-white " : " stroke-accent "
        }`}
      >
        {icon}
      </span>

      <div className="relative w-full">
        <motion.label
          htmlFor={name}
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
          {children}
        </motion.label>
        <input
          id={name}
          type="text"
          ref={inputRef}
          name={name}
          value={value}
          required
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`px-4 py-2 w-full rounded-xl focus:outline-none bg-transparent border text-white ${
            isFocused ? " border-white " : " border-accent "
          } duration-500`}
        />
      </div>
    </div>
  );
};

export default Input;
