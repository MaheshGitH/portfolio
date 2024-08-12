import React from "react";
import { brieJourney } from "../../content";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";

const BriefJourney = () => {
  return (
    <section className="bg-brief text-white flex flex-col items-center duration-500 pb-20 xl:pb-52">
      <h3 className="font-medium text-xl md:text-2xl xl:text-3xl text-center pt-10 pb-24 lg:pb-36 duration-500">
        {brieJourney.heading}
      </h3>
      <div className="flex flex-col pl-4 xl:gap-20 xl:flex-row ml-0 lg:ml-52 xl:ml-0 duration-500 max-w-6xl">
        <FirstPart></FirstPart>
        <SecondPart></SecondPart>
      </div>
    </section>
  );
};

export default BriefJourney;
