import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import SkillLayout from "./SkillLayout";

const OtherTools = () => {
  return (
    <article>
      <SkillLayout title="Other Tools I'm Familiar With">
        <AnimatedCounter
          customSize="h-8 w-[30px]"
          iconUri="/othertools/auth.svg"
          toolName="Auth Js"
          to={95}
        />
        <AnimatedCounter
          customSize="h-8 w-[26px]"
          iconUri="/othertools/prisma.svg"
          toolName="Prisma"
          to={85}
        />
        <AnimatedCounter
          iconUri="/othertools/socketio.svg"
          toolName="Socket io"
          to={90}
        />
      </SkillLayout>
    </article>
  );
};

export default OtherTools;
