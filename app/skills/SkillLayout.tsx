import React from "react";
import { BsDot } from "react-icons/bs";

interface Props {
  heading: String;
  skills: string[];
}

const SkillLayout = ({ heading, skills }: Props) => {
  return (
    <div className="flex flex-col gap-14">
      <h4 className="~sml/lg:~text-2xl/3xl">### {heading}</h4>
      <ul className="grid grid-flow-col grid-cols-2 grid-rows-2 sm:grid-rows-1 sm:grid-cols-3 gap-8 text-xl text-secondary-light md:mx-auto">
        {skills.map((skill) => (
          <li className="flex items-center">
            <span className="text-primary-dark">
              <BsDot className="size-8" />
            </span>
            {skill}
          </li>
        ))}
      </ul>
      <div className="h-[0.5px] w-full bg-gradient-to-r from-[#121212] from-[20%] via-white via-[50%] to-[#121212] to-[80%]" />
    </div>
  );
};

export default SkillLayout;
