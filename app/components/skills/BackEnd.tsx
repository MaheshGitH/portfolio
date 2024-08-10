import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const BackEnd = () => {
  return (
    <div>
      <p className="font-semibold text-xl mb-10 lg:text-2xl duration-500">
        Back-end
      </p>
      <div className="grid w grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-9">
        <AnimatedCounter iconUri="/back-end/node.svg" toolName="Node" to={85} />
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
      </div>
    </div>
  );
};

export default BackEnd;
