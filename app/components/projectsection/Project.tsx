import React from "react";
import ProjectSummary from "./ProjectSummary";
import CustomImage from "./CustomImage";
import type { Project } from "./types";

const Project = ({ name, description, link, image, left }: Project) => {
  return (
    <div
      className={`flex flex-col gap-32 xl:gap-64 ${
        left ? " xl:flex-row " : " xl:flex-row-reverse "
      }`}
    >
      <ProjectSummary name={name} description={description} link={link} />
      <CustomImage src={image} />
    </div>
  );
};

export default Project;
