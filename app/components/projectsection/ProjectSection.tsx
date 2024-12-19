import React from "react";
import Project from "./Project";
import { projects } from "./content";
import Title from "../Title";

const ProjectSection = () => {
  return (
    <div
      id="Projects"
      className="flex flex-col items-center gap-52 xl:gap-72 duration-200"
    >
      <div className="-mb-28 self-start">
        <Title>Projects</Title>
      </div>
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          link={project.link}
          left={project.left}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default ProjectSection;
