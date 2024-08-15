import React from "react";
import { SendIcon } from "./Icons";
import { useFormStatus } from "react-dom";

const Send = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`flex items-center justify-between gap-10 self-end px-4 focus:outline-none rounded-xl duration-500 border ${
        pending ? " w-28 h-10 px-10 " : " w-36 h-10 "
      } text-accent border-accent stroke-accent hover:text-white hover:border-white hover:stroke-white`}
    >
      {pending ? (
        <span className="loader size-2" />
      ) : (
        <>
          Send
          <span className="size-10 mt-1">
            <SendIcon />
          </span>
        </>
      )}
    </button>
  );
};

export default Send;
