import React, { ReactNode } from "react";
import ProjectIcon from "./ProjectIcon";
import { AlgopadIcon, CirclechatIcon, YTIcon } from "./Icons";
import ProjectImage from "./ProjectImage";
import ProjectLayout from "./ProjectLayout";
import NextPage from "../components/NextPage";

export interface ProjectLayoutProps {
  imageSrc: string;
  projectIcon: ReactNode;
  projectName: string;
  description: string;
  link: string;
  reverse?: boolean;
}

const page = () => {
  const projects: ProjectLayoutProps[] = [
    {
      imageSrc: "yt-stats.webp",
      projectIcon: <YTIcon />,
      projectName: "YT-stats",
      description:
        "Get any YouTube channel's stats with their username/channel ID.",
      link: "https://yt-stats.netlify.app",
      reverse: false,
    },
    {
      imageSrc: "circlchat.webp",
      projectIcon: <CirclechatIcon />,
      projectName: "Circlechat",
      description: "Create groups, invite friends, and chat",
      link: "nolink",
      reverse: true,
    },
    {
      imageSrc: "algopad.webp",
      projectIcon: <AlgopadIcon />,
      projectName: "Algopad",
      description: "Learning Data Structures and Algorithms made easy.",
      link: "nolink",
      reverse: false,
    },
  ];
  return (
    <div className="pt-80 px-2 max-w-[87.188rem] mx-auto">
      <div className="flex items-end gap-2 mb-28">
        <ProjectIcon />

        <h3 className="~sml/lg:~text-2xl/3xl">Knowledge & Skills</h3>
      </div>
      <div className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <ProjectLayout
            key={index}
            imageSrc={project.imageSrc}
            projectIcon={project.projectIcon}
            projectName={project.projectName}
            description={project.description}
            link={project.link}
            reverse={project.reverse}
          />
        ))}
      </div>
      <NextPage href="contact">Contact Info</NextPage>
    </div>
  );
};

export default page;
