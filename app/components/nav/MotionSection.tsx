import { motion } from "framer-motion";
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
      transition={{ duration: duration, type: "spring" }}
      className="size-8 duration-300 2xl:ml-12 text-white text-2xl"
    >
      <motion.span
        className="fixed"
        initial={{ x: 0 }}
        animate={{ x: name ? 20 : -100 }}
        transition={{ duration: 1, ease: "backOut" }}
      >
        {name ? name : ""}
      </motion.span>
      <motion.span
        className=" fixed"
        initial={{ x: 100 }}
        animate={{ x: name ? -100 : 0 }}
        transition={{ duration: 2, type: "spring" }}
      >
        {name ? "" : children}
      </motion.span>
    </motion.a>
  );
};

export default MotionSection;
