"use client";

import React, { useState } from "react";
import Circle from "./Circle";
import EasterEgg from "./EasterEgg/EasterEgg";
import TopSection from "../TopSection/TopSection";

const Background = () => {
  const [congrats, setCongrats] = useState(false);
  return (
    <div className="relative h-screen">
      <Circle congrats={congrats} />
      <EasterEgg congrats={(value) => setCongrats(value)} />
      <TopSection />
    </div>
  );
};

export default Background;
