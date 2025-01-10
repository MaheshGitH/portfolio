import React, { useEffect } from "react";
import { useFormStatus } from "react-dom";

interface Props {
  isPending: (value: boolean) => void;
}

const SendButton = ({ isPending }: Props) => {
  const { pending } = useFormStatus();

  useEffect(() => {
    isPending(pending);
  }, [pending]);
  return (
    <button
      type="submit"
      disabled={pending}
      className="self-end py-4 px-14 text-white rounded-lg hover:opacity-70 duration-150 bg-primary opacity-100 disabled:opacity-70"
    >
      Send
    </button>
  );
};

export default SendButton;
