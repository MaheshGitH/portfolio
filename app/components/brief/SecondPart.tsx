"use client";

import React, { useRef } from "react";
import AnimatedRive from "./AnimatedRive";
import { useRive } from "rive-react";
import { brieJourney } from "../../content";

const SecondPart = () => {
  const fourthRef = useRef<HTMLSpanElement>(null);
  const fifthRef = useRef<HTMLSpanElement>(null);
  const sixthRef = useRef<HTMLSpanElement>(null);

  const fourthRive = useRive({
    src: "/circle2.riv",
    autoplay: false,
    animations: "Rotate",
  });
  const fifthRive = useRive({
    src: "/circle2.riv",
    autoplay: false,
    animations: "Rotate",
  });
  const sixthRive = useRive({
    src: "/circle2.riv",
    autoplay: false,
    animations: "Rotate",
  });

  return (
    <div className="flex flex-col">
      <AnimatedRive
        riveInstance={fourthRive}
        data={brieJourney.fourth}
        reference={fourthRef}
      />
      <AnimatedRive
        riveInstance={fifthRive}
        data={brieJourney.fifth}
        reference={fifthRef}
      />
      <AnimatedRive
        riveInstance={sixthRive}
        data={brieJourney.sixth}
        reference={sixthRef}
      />
    </div>
  );
};

export default SecondPart;
