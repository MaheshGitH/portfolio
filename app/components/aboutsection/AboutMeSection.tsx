import React from "react";
import Picture from "./Picture";
import Title from "../Title";

const AboutMeSection = () => {
  return (
    <div id="About me">
      <Title>About me</Title>
      <div className="flex flex-col lg:items-center gap-12 max-w-7xl mx-auto leading-8">
        <Picture />
        <p className="text-start lg:text-center">
          Hello, My name is Mahesh Krishnan. I am a full stack developer and a
          fresher I have completed my bachelor's degree in Computer Science in
          2025 from Jamal Mohammed College. Before joining college I was a
          self-taught programmer who had the interest in programming and I
          started learning python by watching youtube videos. Later on, I
          developed a keen interest in web technologies and started learning
          HTML, CSS and JavaScript.
        </p>
        <p className="self-start">
          Now, I have built fun and unique projects using React and Next.js.
        </p>
        <a
          href="/resume.pdf"
          download="MaheshKrishnan_Resume.pdf"
          className="bg-primary text-white self-end py-2 px-8 w-fit rounded-lg hover:bg-primary/70"
        >
          Download my resume
        </a>
      </div>
    </div>
  );
};

export default AboutMeSection;
