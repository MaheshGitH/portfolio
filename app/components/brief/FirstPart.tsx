"use client";

import React from "react";
import { brieJourney } from "../../content";
import Journey from "./Journey";
import AnimatedRive from "./AnimatedRive";

const FirstPart = () => {
  return (
    <div className="flex">
      <div className="flex flex-col mr-3">
        <AnimatedRive />
        <AnimatedRive />
        <AnimatedRive />
      </div>
      <div className="flex flex-col xl:gap-5">
        <Journey data={brieJourney.first} />
        <Journey data={brieJourney.second} />
        <Journey data={brieJourney.third} />
      </div>
    </div>
  );
};

export default FirstPart;
