import React from "react";
import AboutMe from "./AboutMe";

const TopSection = () => {
  return (
    <div className="absolute inset-0 h-screen flex flex-col gap-16 justify-center items-center ">
      <h1 className="text-center ~sml/xl:~text-4xl/5xl font-stylish">
        Full-Stack Developer
      </h1>
      <h2 className="text-center ~sml/xl:~text-3xl/[2.5rem]">
        Building clean and reliable full-stack applications.
      </h2>
      <AboutMe />
    </div>
  );
};

export default TopSection;
