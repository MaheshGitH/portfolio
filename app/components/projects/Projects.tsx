import React from "react";
import { projects } from "../../content";
import ProjectLayout from "./ProjectLayout";

const Projects = () => {
  return (
    <section id="projects" className="mt-px bg-rest text-white">
      <h3 className="font-medium text-xl md:text-2xl xl:text-3xl text-center pt-10 pb-24 lg:pb-36 duration-500">
        Projects
      </h3>
      <section className="flex flex-col ml-0 lg:ml-52 xl:ml-64 2xl:ml-72 duration-500">
        {projects.map((project, index) => (
          <ProjectLayout key={index} project={project} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
