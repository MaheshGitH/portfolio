import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import SkillLayout from "./SkillLayout";

const BackEnd = () => {
  return (
    <article>
      <SkillLayout title="Back-end">
        <AnimatedCounter
          iconUri="/back-end/next.svg"
          toolName="Next js"
          to={90}
        />
        <AnimatedCounter
          customSize="h-7 w-9"
          iconUri="/back-end/docker.svg"
          toolName="Docker"
          to={30}
        />
        <AnimatedCounter
          customSize="h-[31px] w-7"
          iconUri="/back-end/nginx.svg"
          toolName="Nginx"
          to={20}
        />
      </SkillLayout>
    </article>
  );
};

export default BackEnd;
