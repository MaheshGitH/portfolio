import React from "react";
import Background from "./Background";
import BottomSection from "./BottomSection";
import Picture from "./Picture";

const HomeSection = () => {
  return (
    <main className="relative -mt-12">
      <Background />
      <Picture />
      <BottomSection />
    </main>
  );
};

export default HomeSection;
