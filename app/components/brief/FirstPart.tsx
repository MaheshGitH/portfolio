"use client";

import React from "react";
import { brieJourney } from "../../content";
import Journey from "./Journey";
import AnimatedRive from "./AnimatedRive";

const FirstPart = () => {
  return (
    <div className="flex">
      <div className="flex flex-col mr-3 xl:mr-0">
        <AnimatedRive />
        <AnimatedRive />
        <AnimatedRive />
      </div>
      <section className="flex flex-col xl:gap-5 ml-2">
        <Journey data={brieJourney.first} />
        <Journey data={brieJourney.second} />
        <Journey data={brieJourney.third} />
      </section>
    </div>
  );
};

export default FirstPart;
