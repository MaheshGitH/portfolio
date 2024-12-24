import React from "react";
import Title from "../Title";
import Frontend from "./Frontend";
import Backend from "./Backend";
import DevOpsDeployment from "./DevOpsDeployment";
import AuthAndUtils from "./AuthAndUtils";

const SkillSection = () => {
  return (
    <div id="Skills" className="flex flex-col">
      <Title>Tools I'm Familiar With</Title>
      <div className="flex flex-col gap-16">
        <Frontend />
        <Backend />
        <DevOpsDeployment />
        <AuthAndUtils />
      </div>
    </div>
  );
};

export default SkillSection;
