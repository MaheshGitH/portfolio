import React from "react";
import { introduction } from "../../content";
import { BsWrench } from "react-icons/bs";
import { BsGearWideConnected } from "react-icons/bs";
import SocialIcons from "./SocialIcons";

const Introduction = () => {
  return (
    <section className="bg-intro text-white pt-6 pl-5 flex flex-col gap-16">
      <img src="logo.svg" alt="logo" className="w-32" />
      <div className=" flex flex-col gap-5">
        <h1 className="font-semibold text-4xl">{introduction.name}</h1>
        <h2 className="font-semibold text-xl relative">
          I'm a S
          <BsGearWideConnected className="size-3 inline-block text-black " />
          ftware eng
          <BsWrench className=" size-3 -rotate-[135deg] text-black inline-block" />
          neer
        </h2>
        <SocialIcons />
      </div>
      <div className="h-40"></div>
      <p className=" text-accent font-semibold mb-3">{introduction.quote}</p>
    </section>
  );
};

export default Introduction;
