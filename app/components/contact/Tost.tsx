import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRive } from "rive-react";
import { AiOutlineClose } from "react-icons/ai"; // Using react-icons for the close button

interface Props {
  success: boolean;
}

const Tost = ({ success }: Props) => {
  const [close, setClose] = useState(true);

  const { rive, RiveComponent } = useRive({
    src: "/successAnimation.riv",
    autoplay: true,
  });

  useEffect(() => {
    if (!success) return;

    setClose(false);

    const handleTimeOut = () => {
      setClose(true);
    };

    const timerID = setTimeout(handleTimeOut, 3500);

    return () => {
      clearTimeout(timerID);
    };
  }, [success]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: close ? 0 : 1, x: close ? 300 : 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ duration: 0.5 }}
      className="fixed w-72 h-12 flex items-center justify-between gap-3 bg-brief text-white rounded-lg right-4 bottom-36 shadow-lg p-3"
    >
      <div className="flex items-center gap-4">
        <p className="text-sm">Thank you for your response</p>
        <RiveComponent className="size-5" />
      </div>
      <button onClick={() => setClose(true)}>
        <AiOutlineClose className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default Tost;
