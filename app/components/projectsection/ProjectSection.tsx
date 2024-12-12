import React from "react";
import Project from "./Project";
import { projects } from "./content";

const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-52">
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
