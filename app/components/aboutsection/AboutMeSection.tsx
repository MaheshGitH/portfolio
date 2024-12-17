import React from "react";
import Picture from "./Picture";
import Title from "../Title";
import Link from "next/link";

const AboutMeSection = () => {
  return (
    <div id="About me" className="flex flex-col gap-8">
      <Title>About me</Title>
      <Picture />
      <p>
        Hello, My name is Mahesh Krishnan. I am a full stack developer and a
        fresher I have completed my bachelor's degree in Computer Science in
        2025 from Jamal Mohammed College. Before joining college I was a
        self-taught programmer who had the interest in programming and I started
        learning python by watching youtube videos. Later on, I developed a keen
        interest in web technologies and started learning HTML, CSS and
        JavaScript.
      </p>
      <p>Now, I have built fun and unique projects using React and Next.js.</p>
      <a
        href="/resume.pdf"
        download="MaheshKrishnan_Resume.pdf"
        className="bg-primary text-white py-2 px-8 w-fit rounded-lg hover:bg-primary/70"
      >
        Download my resume
      </a>
    </div>
  );
};

export default AboutMeSection;
