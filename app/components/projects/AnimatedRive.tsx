"use client";

import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useRive } from "rive-react";

const AnimatedRive = () => {
  const spanRef = useRef<HTMLSpanElement>(null);

  const inView = useInView(spanRef, { once: true, amount: 0.4 });

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
      <span className="w-14 inline-block h-full ml-2" ref={spanRef}>
        <RiveComponent className="w-5 h-[1000px] mx-auto" />
      </span>
    </>
  );
};

export default AnimatedRive;
