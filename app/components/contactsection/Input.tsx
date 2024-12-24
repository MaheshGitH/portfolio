import React, { useState } from "react";

interface Props {
  varient: "textarea" | "input";

  children: string;
}
const Input = ({ varient, children }: Props) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative text-black dark:text-white">
      {varient === "input" ? (
        <>
          <input
            className="w-full h-14 border-2 border-primary/35 bg-transparent py-1 px-2 outline-none focus:border-primary rounded-lg duration-200 peer"
            id={children}
            autoComplete="off"
            type="text"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <label
            className={`absolute bg-light dark:bg-dark select-none cursor-text -translate-y-1/2 peer-focus:left-3 peer-focus:top-0 peer-focus:text-black dark:peer-focus:text-white peer-focus:text-base duration-200 ${
              value ? " left-2 top-0 text-base " : " top-1/2 left-3  "
            }`}
            htmlFor={children}
          >
            {children}
          </label>
        </>
      ) : (
        <>
          <textarea
            className="w-full border-2 border-primary/35 bg-transparent py-4 px-2 outline-none focus:border-primary rounded-lg duration-200 peer"
            id={children}
            autoComplete="off"
            rows={7}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></textarea>
          <label
            className={`absolute bg-light dark:bg-dark select-none cursor-text -translate-y-1/2 peer-focus:left-3 peer-focus:top-0 peer-focus:text-black dark:peer-focus:text-white peer-focus:text-base duration-200 ${
              value ? " left-2 top-0 text-base " : " top-7 left-3  "
            }`}
            htmlFor={children}
          >
            {children}
          </label>
        </>
      )}
    </div>
  );
};

export default Input;
