"use client";
import * as React from "react";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Props {
  radius?: number;
  children: React.ReactNode;
  className?: string;
}

export default function HoverEffectContainer({
  radius = 100,
  children,
  className,
}: Props) {
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <motion.div
      style={{
        background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          #00e0e0,
          transparent 50%
        )
      `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={cn("p-px text-white transition duration-300", className)}
    >
      {children}
    </motion.div>
  );
}
