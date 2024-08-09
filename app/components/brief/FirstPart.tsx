"use client";

import React, { useRef } from "react";
import { brieJourney } from "../../content";
import { useRive } from "rive-react";
import AnimatedRive from "./AnimatedRive";

const FirstPart = () => {
  const firtRef = useRef<HTMLSpanElement>(null);
  const secondRef = useRef<HTMLSpanElement>(null);
  const thirdRef = useRef<HTMLSpanElement>(null);

  const firstRive = useRive({
    src: "/circle.riv",
    autoplay: false,
    animations: "Rotate",
  });

  const secondRive = useRive({
    src: "/circle2.riv",
    autoplay: false,
    animations: "Rotate",
  });

  const thirdRive = useRive({
    src: "/circle2.riv",
    autoplay: false,
    animations: "Rotate",
  });

  return (
    <div className="flex flex-col">
      <AnimatedRive
        riveInstance={firstRive}
        data={brieJourney.first}
        reference={firtRef}
      />
      <AnimatedRive
        riveInstance={secondRive}
        data={brieJourney.second}
        reference={secondRef}
      />
      <AnimatedRive
        riveInstance={thirdRive}
        data={brieJourney.third}
        reference={thirdRef}
      />
    </div>
  );
};

export default FirstPart;
