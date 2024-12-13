import React from "react";
import Title from "../Title";
import Frontend from "./Frontend";
import Backend from "./Backend";

const SkillSection = () => {
  return (
    <div className="flex flex-col gap-16">
      <Title>Tools I'm Familiar With</Title>
      <Frontend />
      <Backend />
    </div>
  );
};

export default SkillSection;
