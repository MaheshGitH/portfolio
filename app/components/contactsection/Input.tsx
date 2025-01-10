import React, { useEffect, useState } from "react";

interface Props {
  name: string;
  state?: boolean;
  children: string;
}

const Input = ({ children, name, state }: Props) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (!state) {
      setValue("");
    }
  }, [state]);

  return (
    <div className="relative text-black dark:text-white">
      <input
        className="w-full h-14 border-2 border-primary/35 bg-transparent py-1 px-2 outline-none focus:border-primary rounded-lg duration-200 peer"
        id={children}
        autoComplete="off"
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        name={name}
      />
      <label
        className={`absolute bg-light dark:bg-dark select-none cursor-text -translate-y-1/2 peer-focus:left-3 peer-focus:top-0 peer-focus:text-black dark:peer-focus:text-white peer-focus:text-base duration-200 ${
          value ? " left-2 top-0 text-base " : " top-1/2 left-3  "
        }`}
        htmlFor={children}
      >
        {children}
      </label>
    </div>
  );
};

export default Input;
