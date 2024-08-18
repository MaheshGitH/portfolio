import React from "react";
import { introduction } from "../../content";
import { BsWrench } from "react-icons/bs";
import { BsGearWideConnected } from "react-icons/bs";
import SocialIcons from "./SocialIcons";
import Logo from "./Logo";
import Link from "next/link";

const Introduction = () => {
  return (
    <header id="introduction" className="bg-intro text-white pt-6 pl-5">
      <div className="max-w-[1700px] w-full mx-auto flex flex-col gap-0 lg:gap-20 duration-500">
        <Logo />
        <article className="pt-6 pl-5 flex flex-col gap-10 lg:gap-40 ml-0 lg:ml-48 xl:ml-56 duration-500">
          <div className="flex items-center">
            <div className=" flex flex-col gap-5 md:gap-10 duration-500 mt-10">
              <h1 className="font-semibold text-4xl md:text-5xl duration-500">
                {introduction.name}
              </h1>
              <h2 className="font-medium text-xl relative md:text-2xl duration-500">
                I'm a S
                <BsGearWideConnected className="size-3 inline-block animate-spin-slow text-black md:size-4" />
                ftware eng
                <BsWrench className=" size-3 -rotate-[135deg] text-black inline-block md:size-5" />
                neer
              </h2>
              <SocialIcons />
            </div>
            <div className="size-40 bg-fuchsia-400 w-[200px] self-center max-lg:hidden mx-auto" />
          </div>
          <div className="size-40 lg:hidden bg-black"></div>
          <p className="text-accent pr-1 mb-10 md:mb-36 duration-500 md:text-lg lg:text-xl max-w-3xl">
            {introduction.quote}
          </p>
        </article>
      </div>
    </header>
  );
};

export default Introduction;
