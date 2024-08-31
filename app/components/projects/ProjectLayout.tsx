import Link from "./Link";
import React from "react";
import AnimatedRive from "./AnimatedRive";
import IFrame from "./IFrame";
import Line from "./Line";
import ProjectOverview from "./ProjectOverview";
import TechStack from "./TechStack";

interface Props {
  project: {
    name: string;
    techStack: string[];
    projectOverview: string;
    iconFolder: string;

    links: {
      website: string;
      blog?: string;
    };
  };
}

const ProjectLayout = ({ project }: Props) => {
  return (
    <article className="duration-500 relative">
      <div className="absolute top-0 bottom-0 left-2 overflow-hidden">
        <AnimatedRive />
      </div>

      <div className="flex flex-col ml-10 gap-10 md:pr-5">
        <div className="flex flex-col gap-10">
          <p className="font-semibold text-xl md:text-[22px] lg:text-2xl duration-500">
            {project.name}
          </p>
          <div className="flex flex-col gap-5">
            <span className="text-accent font-semibold lg:text-lg">
              Tech Stack
            </span>
            <div className="flex gap-4 flex-wrap max-w-md">
              {project.techStack.map((tech, index) => (
                <TechStack
                  folderIn={project.iconFolder}
                  key={index}
                  tech={tech}
                />
              ))}
            </div>
          </div>

          <ProjectOverview projectOverview={project.projectOverview} />

          <Link website={project.links.website} blog={project.links.blog} />
        </div>
        <IFrame websiteLink={project.links.website} />

        <Line />
      </div>
    </article>
  );
};

export default ProjectLayout;
