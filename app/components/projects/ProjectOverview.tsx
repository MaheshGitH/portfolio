import React from "react";

interface Props {
  projectOverview: string;
}

const ProjectOverview = ({ projectOverview }: Props) => {
  return (
    <div className="flex flex-col gap-5 font-semibold">
      <span className="text-accent lg:text-lg">Project Overview</span>
      <p className="xl:w-[500px] font-normal lg:text-lg">{projectOverview}</p>
    </div>
  );
};

export default ProjectOverview;
