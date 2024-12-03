import React from "react";
import {
  CodeIcon,
  DivideIcon,
  MinusIcon,
  MultipleIcon,
  PlusIcon,
} from "./BackgroundIcons";

const Background = () => {
  return (
    <div className="relative max-w-6xl w-full h-96 mt-16 mx-auto p-4">
      <span className="absolute">
        <DivideIcon />
      </span>
      <span className="absolute right-4">
        <PlusIcon />
      </span>
      <span className="absolute bottom-0">
        <MultipleIcon />
      </span>
      <span className="absolute left-2/3 bottom-1/4">
        <CodeIcon />
      </span>
      <span className="absolute bottom-0 right-4">
        <MinusIcon />
      </span>
    </div>
  );
};

export default Background;
