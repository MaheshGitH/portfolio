import React from "react";
import AboutMe from "./AboutMe";
import Picture from "./Picture";
import NextPage from "../NextPage";

const BottomSection = () => {
  return (
    <div className="max-w-[87.188rem] mx-auto px-2" id="aboutme">
      <AboutMe>
        <Picture />
      </AboutMe>
      <div className="">
        <NextPage href="skills">knowledge & Skills</NextPage>
      </div>
    </div>
  );
};

export default BottomSection;
