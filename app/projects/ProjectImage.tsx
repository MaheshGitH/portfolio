import React from "react";

interface Props {
  src: string;
}

const ProjectImage = ({ src }: Props) => {
  return <img className="~sml/xl:~w-60/[40.9rem] self-center" src={src} />;
};

export default ProjectImage;
