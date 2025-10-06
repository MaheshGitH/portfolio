import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";
import ProjectImage from "./ProjectImage";
import { ProjectLayoutProps } from "./page";

const ProjectLayout = ({
  reverse,
  imageSrc,
  projectIcon,
  projectName,
  description,
  link,
}: ProjectLayoutProps) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? " lg:flex-row-reverse " : " lg:flex-row "
      } lg:justify-between gap-4`}
    >
      <div className="flex flex-col gap-6 mb-6">
        <div className="flex gap-2 ~sml/lg:~text-2xl/3xl">
          {projectIcon}
          <span className="mt-1">{projectName}</span>
        </div>
        <p className="text-secondary-light ~sml/lg:~text-lg/xl">
          {description}
        </p>
        <span className="flex items-center gap-1 ~sml/lg:~text-lg/xl text-secondary-light">
          Live at:
          {link === "nolink" ? (
            " nolink"
          ) : (
            <Link
              href="live"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2"
            >
              {link}
            </Link>
          )}
          <span
            className={`text-primary ${
              link === "nolink" ? " hidden " : " inline-block "
            }`}
          >
            <RiExternalLinkLine />
          </span>
        </span>
      </div>
      <ProjectImage src={imageSrc} />
    </div>
  );
};

export default ProjectLayout;
