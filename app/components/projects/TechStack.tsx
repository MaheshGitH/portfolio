import React from "react";

interface Props {
  folderIn: string;
  tech: string;
}

const TechStack = ({ tech, folderIn }: Props) => {
  return (
    <span className="flex items-center gap-2">
      <img
        className="size-8"
        src={`/${folderIn}/${tech.toLowerCase().replace(/\s+/g, "")}.svg`}
        alt={tech}
      />
      <span className="text-accent font-medium text-nowrap">{tech}</span>
    </span>
  );
};

export default TechStack;
