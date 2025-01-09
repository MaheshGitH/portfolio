import React from "react";
import Background from "./Background";
import BottomSection from "./BottomSection";
import Picture from "./Picture";

const HomeSection = () => {
  return (
    <main id="Home" className="relative h-screen -mt-40">
      <Background />
      <div
        className="flex flex-col gap-24 justify-center items-center absolute inset-0 lg:flex-row-reverse
      "
      >
        <Picture />
        <BottomSection />
      </div>
    </main>
  );
};

export default HomeSection;
