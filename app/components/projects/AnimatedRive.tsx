"use client";

import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useRive } from "rive-react";

const AnimatedRive = () => {
  const spanRef = useRef<HTMLSpanElement>(null);

  const inView = useInView(spanRef, { once: true, amount: 0.25 });

  const { rive, RiveComponent } = useRive({
    src: "/riveForProject.riv",
    autoplay: false,
  });

  useEffect(() => {
    if (!rive) return;
    if (!inView) return;
    rive.play();

    return () => rive.stop();
  }, [rive, inView]);

  return (
    <>
      <span className="w-[20px] inline-block" ref={spanRef}>
        <RiveComponent className="w-full h-[2000px]" />
      </span>
    </>
  );
};

export default AnimatedRive;
