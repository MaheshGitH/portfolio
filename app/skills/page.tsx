import React from "react";
import BookIcon from "./BookIcon";
import SkillLayout from "./SkillLayout";
import NextPage from "../components/NextPage";
import BackgroundPattern from "./BackgroundPattern";

export default function page() {
  const skills = [
    {
      heading: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python"],
    },
    {
      heading: "Frameworks",
      skills: ["Next.js"],
    },
    {
      heading: "Databases",
      skills: ["MongoDB", "Firebase"],
    },
    {
      heading: "Libraries & Tools",
      skills: ["React.js", "Prisma", "Socket.io"],
    },
    {
      heading: "DevOps",
      skills: ["Docker"],
    },
    {
      heading: "Authentication",
      skills: ["Auth.js"],
    },
  ];
  return (
    <div className="pt-80 px-2 max-w-[87.188rem] mx-auto">
      <div className="flex items-end gap-2 mb-28 relative">
        <div className="absolute -top-14 -left-14 max-2xl:hidden -z-50">
          <BackgroundPattern />
        </div>
        <BookIcon />

        <h3 className="~sml/lg:~text-2xl/3xl">Knowledge & Skills</h3>
      </div>
      <div className="flex flex-col gap-20 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <SkillLayout
            key={index}
            heading={skill.heading}
            skills={skill.skills}
          />
        ))}
      </div>
      <NextPage href="projects">Personal Projects</NextPage>
    </div>
  );
}
