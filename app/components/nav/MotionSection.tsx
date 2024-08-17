import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";

interface Props {
  duration: number;
  children: ReactNode;
  state: boolean;
  section: string;
  name: string;
}

const MotionSection = ({ duration, children, state, section, name }: Props) => {
  return (
    <motion.a
      href={section}
      initial={{ x: -500 }}
      animate={{
        x: state ? 0 : -500,
      }}
      exit={{ x: -500 }}
      transition={{ duration: duration, ease: "easeIn" }}
      className="size-8 duration-300 2xl:ml-12 text-white text-2xl xl:font-bold"
    >
      <>
        <AnimatePresence>
          {name && (
            <motion.span
              key="nameSpan"
              className="fixed"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 20, opacity: 1 }}
              exit={{ x: 10, opacity: 0 }}
              transition={{ duration: 1.5, ease: "backOut" }}
            >
              {name}
            </motion.span>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!name && (
            <motion.span
              key="childrenSpan"
              className="fixed"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              {children}
            </motion.span>
          )}
        </AnimatePresence>
      </>
    </motion.a>
  );
};

export default MotionSection;
