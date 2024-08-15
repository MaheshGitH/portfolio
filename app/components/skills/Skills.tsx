import React from "react";

import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import DataBase from "./DataBase";
import OtherTools from "./OtherTools";

const Skills = () => {
  return (
    <section className="bg-rest text-white pr-1 lg:pr-0">
      <h3 className="font-medium text-xl md:text-2xl xl:text-3xl text-center pt-10 mb-10 lg:mb-16 duration-500">
        Skills
      </h3>
      <h4 className="font-medium text-lg text-center mb-11 md:text-xl xl:text-2xl">
        Front-end&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Back-end&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Database
      </h4>
      <div className="pl-4 ml-0 lg:ml-52 xl:ml-80 duration-500 flex flex-col gap-20 pb-20">
        <FrontEnd />
        <BackEnd />
        <DataBase />
        <OtherTools />
      </div>
    </section>
  );
};

export default Skills;
