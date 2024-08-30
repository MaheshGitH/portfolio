import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import SkillLayout from "./SkillLayout";

const FrontEnd = () => {
  return (
    <article>
      <SkillLayout title="Front-end">
        <AnimatedCounter
          iconUri="/front-end/figma.svg"
          toolName="Figma"
          to={30}
        />
        <AnimatedCounter
          iconUri="/front-end/html.svg"
          toolName="HTML"
          to={90}
        />
        <AnimatedCounter iconUri="/front-end/css.svg" toolName="CSS" to={90} />
        <AnimatedCounter
          iconUri="/front-end/typescript.svg"
          toolName="Typescript"
          to={85}
        />
        <AnimatedCounter
          customSize="h-[35px] w-9"
          iconUri="/front-end/react.svg"
          toolName="React"
          to={80}
        />
      </SkillLayout>
    </article>
  );
};

export default FrontEnd;
