"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";

const Line = () => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(spanRef, { amount: 1, once: true });

  return (
    <span
      ref={spanRef}
      className={`h-0.5 delay-1000 duration-500 ${
        inView ? " w-full " : " w-0 "
      } bg-brief inline-block`}
    ></span>
  );
};

export default Line;
