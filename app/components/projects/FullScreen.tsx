import { AnimatePresence, motion } from "framer-motion";

import React, { useEffect, useState } from "react";
import { HiMiniSignal } from "react-icons/hi2";
import { RiFullscreenExitLine } from "react-icons/ri";

interface Props {
  state: boolean;
  setState: (value: boolean) => void;
  src: string;
}

const FullScreen = ({ state, setState, src }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!state) return;
    document.body.style.overflow = "hidden";

    return () => {
      setIsLoading(true);
    };
  }, [state]);

  const handleClick = () => {
    document.body.style.overflow = "";
    setState(false);
  };

  return (
    <AnimatePresence>
      {state && (
        <motion.div
          onClick={handleClick}
          className="fixed inset-0 flex justify-center items-center py-6  min-[480px]:px-10"
          initial={{
            zIndex: 10,
            opacity: 0,
            backgroundColor: "rgb(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
          }}
          animate={{
            zIndex: 200,
            opacity: 1,
            backgroundColor: "rgb(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
          }}
          exit={{
            zIndex: 10,
            opacity: 0,
            backgroundColor: "rgb(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="size-full flex flex-col gap-2 border rounded-lg overflow-hidden p-2 relative">
            <div className="flex justify-between w-full">
              {isLoading ? (
                <span className="loader size-2 self-center ml-10"></span>
              ) : (
                <span className="flex items-center gap-2 relative">
                  <HiMiniSignal className="size-5 xl:size-6" />
                  <p className="text-xs xl:text-sm">Live Preview</p>
                </span>
              )}
              <button
                className="flex items-center gap-2 bg-slate-700 px-2 py-1 rounded-lg  duration-300 hover:text-white hover:bg-slate-600"
                onClick={handleClick}
              >
                <RiFullscreenExitLine className="size-5 xl:size-6" />
                <p className="text-xs xl:text-sm">Exit Fullscreen</p>
              </button>
            </div>

            {isLoading ? (
              <div className="bg-white/45 animate-pulse absolute top-11 xl:top-12 bottom-2 right-2 left-2 rounded-lg"></div>
            ) : null}
            <iframe
              className="size-full relative rounded-lg border border-accent"
              onLoad={() => setIsLoading(false)}
              src={src}
            ></iframe>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreen;
