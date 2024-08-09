import React, { RefObject, useEffect } from "react";
import { RiveState } from "rive-react";

type Data = { monthYear: string; description: string };

interface Props {
  riveInstance: RiveState;
  reference: RefObject<HTMLSpanElement>;
  data: Data;
}

const AnimatedRive = ({ riveInstance, reference, data }: Props) => {
  useEffect(() => {
    if (!riveInstance) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (riveInstance.rive) {
            riveInstance.rive.play("Rotate");
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(reference.current);

    return () => observer.disconnect();
  }, [riveInstance]);
  return (
    <div className="flex gap-2 xl:gap-5">
      <span ref={reference} className="flex flex-col items-center">
        <riveInstance.RiveComponent className=" h-32 w-6 xl:h-40 xl:w-8" />
      </span>
      <div className="flex flex-col gap-3 lg:gap-5 pb-2">
        <p className="font-black text-xl lg:text-2xl duration-500">
          {data.monthYear}
        </p>
        <p className="text-accent text-[14px] lg:text-[16px] w-4/5">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default AnimatedRive;
