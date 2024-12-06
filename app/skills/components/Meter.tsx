"use client";

import { motion } from "framer-motion";
import React from "react";

interface Props {
  limit: number;
}

const Meter = ({ limit }: Props) => {
  return (
    <motion.div
      className="h-1 w-full rounded-full relative"
      initial={{
        background:
          "linear-gradient(90deg, #E4DBEE 0%, #5615A5 0% , #E4DBEE 0% ",
      }}
      animate={{
        background: `linear-gradient(90deg, #E4DBEE 0%, #5615A5 ${
          limit - 0.01
        }%, #E4DBEE ${limit}%)`,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    ></motion.div>
  );
};

export default Meter;
