import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const FrontEnd = () => {
  return (
    <div>
      <p className="font-semibold text-xl mb-10 lg:text-2xl duration-500">
        Front-end
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-9">
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
      </div>
    </div>
  );
};

export default FrontEnd;
