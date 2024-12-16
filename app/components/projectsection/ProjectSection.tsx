import React from "react";
import Project from "./Project";
import { projects } from "./content";
import Title from "../Title";

const ProjectSection = () => {
  return (
    <div id="Projects" className="flex flex-col gap-52">
      <span className="-mb-28">
        <Title>Projects</Title>
      </span>
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          link={project.link}
          imageSrc={project.image}
          position={project.position}
          bgColor={project.bgColor}
        />
      ))}
    </div>
  );
};

export default ProjectSection;
