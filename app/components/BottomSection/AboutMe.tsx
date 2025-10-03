import React, { ReactNode } from "react";
import PersonSvg from "./PersonSvg";
import { PiGraduationCap } from "react-icons/pi";

interface Props {
  children: ReactNode;
}

const AboutMe = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-24">
      <h3 className="~sml/lg:~text-3xl/[2.5rem]">About me</h3>
      <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between">
        <div className="max-md:mx-auto">{children}</div>
        <div className="flex flex-col gap-[72px]">
          <div>
            <h4 className="flex gap-2">
              <PersonSvg />
              <span className="~sml/lg:~text-2xl/3xl pt-2">Brief Intro</span>
            </h4>
            <p className="text-secondary-light ~sml/lg:~text-xl/2xl mt-8 max-w-3xl">
              I'm Mahesh Krishnan, a Full-Stack Developer with hands-on
              experience building personal projects using React.js and Next.js.
            </p>
          </div>
          <div>
            <h4 className="flex gap-2">
              <PiGraduationCap className="size-10 text-secondary" />
              <span className="~sml/lg:~text-2xl/3xl pt-2">Education</span>
            </h4>
            <div className="text-secondary-light ~sml/lg:~text-xl/2xl mt-8 max-w-3xl">
              <p className="mb-1">Bachelor's in Computer Science</p>
              <p>Jamal Mohamed College (2022 – 2025)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
