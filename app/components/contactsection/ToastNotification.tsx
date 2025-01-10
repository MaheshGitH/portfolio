import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Props {
  isPending: boolean;
}

const ToastNotification = ({ isPending }: Props) => {
  const [toast, setToast] = useState(true);

  useEffect(() => {
    let timeId: any;

    const handleTimeOut = () => {
      timeId = setTimeout(() => {
        setToast(false);
      }, 4000);
    };
    if (isPending) {
      setToast(false);
    } else {
      setToast(true);
      handleTimeOut();
    }

    return () => {
      clearTimeout(timeId);
    };
  }, [isPending]);

  return (
    <motion.div
      initial={{ right: -600, opacity: 0 }}
      animate={{ right: toast ? 0 : -600, opacity: toast ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="absolute right-0 bottom-20 flex items-center gap-8 bg-white/5 backdrop-blur-md py-2 px-6 rounded-lg border-secondary border"
    >
      Sent Successfully!
      <button
        onClick={() => setToast(false)}
        className="text-secondary text-2xl"
      >
        x
      </button>
    </motion.div>
  );
};

export default ToastNotification;
