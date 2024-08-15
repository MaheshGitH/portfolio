import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const DataBase = () => {
  return (
    <div>
      <p className="font-semibold text-xl mb-10 lg:text-2xl duration-500">
        Database
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-9">
        <AnimatedCounter
          iconUri="/database/firebase.svg"
          toolName="Firebase"
          to={85}
        />
        <AnimatedCounter
          iconUri="/database/mongodb.svg"
          toolName="MongoDB"
          to={85}
        />
        <AnimatedCounter
          customSize="h-7 w-11"
          iconUri="/database/mysql.svg"
          toolName="MySQL"
          to={60}
        />
      </div>
    </div>
  );
};

export default DataBase;
