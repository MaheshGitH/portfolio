import React from "react";
import Details from "./components/Details";
import Links from "./components/Links";
import Contact from "./components/Contact";

const page = () => {
  return (
    <div className="flex flex-col gap-8 mt-32 ml-4">
      <Details />
      <Links />
      <div>
        Designed by: <span className="font-stylish">Mahesh</span>
      </div>
      <Contact />
    </div>
  );
};

export default page;
