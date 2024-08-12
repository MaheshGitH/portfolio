"use client";

import { animate, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface Props {
  to: number;
  toolName: string;
  iconUri: string;
  customSize?: string;
}
const AnimatedCounter = ({ to, toolName, iconUri, customSize }: Props) => {
  const from = 0;
  const spanRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(spanRef, { once: true });

  useEffect(() => {
    const element = spanRef.current;
    if (!element) return;
    if (!inView) return;

    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        element.textContent = value.toFixed(0) + "+";
      },
    });
    return () => controls.stop();
  }, [spanRef, from, to, inView]);

  return (
    <span className="flex items-center gap-3">
      <img
        className={customSize ? customSize : " size-8 "}
        src={iconUri}
        alt={toolName}
      />
      <p className="text-accent text-xl font-medium">{toolName}</p>
      <span className=" text-lg font-medium" ref={spanRef} />
    </span>
  );
};

export default AnimatedCounter;
