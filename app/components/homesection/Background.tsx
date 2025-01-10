"use client";
import React, { useRef } from "react";
import {
  CodeIcon,
  DivideIcon,
  MinusIcon,
  MultipleIcon,
  PlusIcon,
} from "./BackgroundIcons";
import { useInView } from "framer-motion";

const Background = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { amount: 1, once: true });
  return (
    <div
      ref={divRef}
      className="relative max-w-6xl w-full h-96 mt-16 mx-auto p-4"
    >
      <span
        className={`absolute  ${
          isInView
            ? " left-0 top-0 opacity-100 "
            : " left-1/2 top-1/2 opacity-0 "
        } duration-300 ease-out`}
      >
        <DivideIcon />
      </span>
      <span
        className={`absolute ${
          isInView
            ? " right-4 top-0 rotate-0 opacity-100 "
            : " right-1/2 top-1/2 rotate-12 opacity-0"
        } duration-300 ease-out`}
      >
        <PlusIcon />
      </span>
      <span
        className={`absolute ${
          isInView
            ? " left-4 bottom-0 opacity-100 "
            : " left-1/2 bottom-1/2 opacity-0 "
        } duration-300 ease-out`}
      >
        <MultipleIcon />
      </span>
      <span
        className={`absolute ${
          isInView
            ? " left-2/3 bottom-1/4 opacity-100 "
            : " left-1/2 bottom-1/2 opacity-0 "
        } duration-300 ease-out`}
      >
        <CodeIcon />
      </span>
      <span
        className={`absolute ${
          isInView
            ? " bottom-0 right-4 opacity-100"
            : " right-1/2 bottom-1/2 opacity-0 "
        } duration-300 ease-out`}
      >
        <MinusIcon />
      </span>
    </div>
  );
};

export default Background;
