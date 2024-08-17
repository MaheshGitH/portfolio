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
    customHeight: string;
    links: {
      website: string;
      blog?: string;
    };
  };
}

const ProjectLayout = ({ project }: Props) => {
  return (
    <div
      className={`flex ${project.customHeight} duration-500 overflow-y-clip`}
    >
      <AnimatedRive />

      <div className="flex flex-col">
        <div className="flex flex-col xl:flex-row xl:justify-between w-full mb-5 ml-3">
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

            <Link
              websiteName={project.links.website}
              blog={project.links.blog}
            />
          </div>
          <IFrame />
        </div>
        <Line />
      </div>
    </div>
  );
};

export default ProjectLayout;
