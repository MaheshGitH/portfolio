import React from "react";

interface InputProps {
  children: string;
  eg: string;
  textarea?: boolean;
}

const Input = ({ children, eg, textarea }: InputProps) => {
  return (
    <div className="flex justify-center gap-4 ~sml/lg:~text-base/xl">
      <label className="mt-7" htmlFor={children}>
        {children}:
      </label>
      <div className="border-b-2 border-primary px-2 pb-2 pt-7">
        {textarea ? (
          <textarea
            id={children}
            autoComplete="off"
            className="bg-transparent outline-none resize-none placeholder-[#6b7280] ~sml/lg:~w-28/[35rem]"
            rows={3}
            placeholder={eg}
          />
        ) : (
          <input
            id={children}
            autoComplete="off"
            className="bg-transparent outline-none placeholder-[#6b7280] ~sml/lg:~w-28/[35rem]"
            type="text"
            placeholder={eg}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
