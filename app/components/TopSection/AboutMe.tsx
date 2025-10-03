import React from "react";
import { FaArrowDown } from "react-icons/fa";

const AboutMe = () => {
  const handleScroll = () => {
    const element = document.getElementById("aboutme");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-8 text-primary">
      <button onClick={handleScroll} className="flex flex-col items-center">
        <span className="text-base">About me</span>
        <span className="border-2 rounded-full border-primary duration-200 size-8 pt-2 hover:pt-3">
          <FaArrowDown className="size-3 mx-auto" />
        </span>
      </button>
    </div>
  );
};

export default AboutMe;
