import React, { useState } from "react";

interface Props {
  varient: "textarea" | "input";

  children: string;
}
const Input = ({ varient, children }: Props) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative max-w-96">
      <label
        className={`absolute select-none cursor-text ${
          value ? " hidden " : " block "
        }`}
        htmlFor={children}
      >
        {children}
      </label>
      {varient === "input" ? (
        <input
          className="border-primary border-b-2 w-full bg-transparent outline-none pb-2 dark:text-white"
          id={children}
          autoComplete="off"
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      ) : (
        <textarea
          className="border-primary border-b-2 w-full bg-transparent outline-none pb-2 resize-none dark:text-white"
          id={children}
          autoComplete="off"
          rows={7}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></textarea>
      )}
    </div>
  );
};

export default Input;
