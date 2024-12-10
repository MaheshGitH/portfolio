import React from "react";
import CardTopSection from "./CardTopSection";
import Card from "./Card";
import { ThreeImage, ThreePos } from "./types";

interface Props {
  name: string;
  description: string;
  link: string;
  imageSrc: ThreeImage;
  position: ThreePos;
  bgColor: string;
}

const Project = ({
  name,
  description,
  link,
  imageSrc,
  position,
  bgColor,
}: Props) => {
  return (
    <div>
      <CardTopSection name={name} description={description} link={link} />
      <Card bgColor={bgColor} imageSrc={imageSrc} imagePos={position} />
    </div>
  );
};

export default Project;
