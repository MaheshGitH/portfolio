import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useRive } from "rive-react";

const AnimatedRive = () => {
  const spanRef = useRef<HTMLSpanElement>(null);

  const inView = useInView(spanRef, { once: true, amount: 1 });

  const { rive, RiveComponent } = useRive({
    src: "/riveAnimation.riv",
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
      <span className="h-[120px] xl:h-[140px]" ref={spanRef}>
        <RiveComponent className="w-4 h-[120px] xl:h-[140px]" />
      </span>
    </>
  );
};

export default AnimatedRive;
