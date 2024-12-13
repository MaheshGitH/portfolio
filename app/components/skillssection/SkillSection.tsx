import React from "react";
import Title from "../Title";
import Frontend from "./Frontend";
import Backend from "./Backend";
import DevOpsDeployment from "./DevOpsDeployment";

const SkillSection = () => {
  return (
    <div className="flex flex-col gap-16">
      <Title>Tools I'm Familiar With</Title>
      <Frontend />
      <Backend />
      <DevOpsDeployment />
    </div>
  );
};

export default SkillSection;
