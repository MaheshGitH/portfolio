import React from "react";
import Picture from "./Picture";
import Title from "../Title";

const AboutMeSection = () => {
  return (
    <div className="flex flex-col gap-8">
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
      <button className="bg-primary text-white py-2 px-8 w-fit rounded-lg">
        Download my resume
      </button>
    </div>
  );
};

export default AboutMeSection;
