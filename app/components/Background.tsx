"use client";
import React, { useEffect, useState } from "react";
import {
  CodeIcon,
  DivideIcon,
  MinusIcon,
  MultipleIcon,
  PlusIcon,
} from "./BackgroundIcons";

const Background = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className="relative max-w-6xl w-full h-96 mt-16 mx-auto p-4">
      <span
        className={`absolute  ${
          animate ? " left-0 top-0 " : " left-1/2 top-1/2 "
        } duration-300 ease-out`}
      >
        <DivideIcon />
      </span>
      <span
        className={`absolute ${
          animate ? " right-4 top-0 rotate-0 " : " right-1/2 top-1/2 rotate-12 "
        } duration-300 ease-out`}
      >
        <PlusIcon />
      </span>
      <span
        className={`absolute ${
          animate ? " left-4 bottom-0 " : " left-1/2 bottom-1/2 "
        } duration-300 ease-out`}
      >
        <MultipleIcon />
      </span>
      <span
        className={`absolute ${
          animate ? " left-2/3 bottom-1/4 " : " left-1/2 bottom-1/2 "
        } duration-300 ease-out`}
      >
        <CodeIcon />
      </span>
      <span
        className={`absolute ${
          animate ? " bottom-0 right-4 " : " right-1/2 bottom-1/2 "
        } duration-300 ease-out`}
      >
        <MinusIcon />
      </span>
    </div>
  );
};

export default Background;
