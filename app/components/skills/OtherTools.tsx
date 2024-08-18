import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const OtherTools = () => {
  return (
    <article>
      <p className="font-semibold text-xl mb-10 lg:text-2xl duration-500">
        Other Tools I'm Familiar With
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-9">
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
      </div>
    </article>
  );
};

export default OtherTools;
