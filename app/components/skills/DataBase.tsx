import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import SkillLayout from "./SkillLayout";

const DataBase = () => {
  return (
    <article>
      <SkillLayout title="Database">
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
      </SkillLayout>
    </article>
  );
};

export default DataBase;
