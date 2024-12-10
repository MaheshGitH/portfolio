import React from "react";
import {
  Figma,
  Typescript,
  React18,
  Nextjs,
  HTML5,
  CSS3,
  Docker,
  Mongodb,
  Firebase,
  MySQL,
} from "./SkillIcons";
import SkillLayout from "./SkillLayout";

const SkillSection = () => {
  return (
    <div className="flex flex-col gap-16 mt-48 mb-16 px-4">
      <SkillLayout icon={<Figma />} name="Figma" limit={50} />
      <SkillLayout icon={<Typescript />} name="Typescript" limit={85} />
      <SkillLayout icon={<React18 />} name="React 18" limit={95} />
      <SkillLayout icon={<Nextjs />} name="Next js" limit={90} />
      <SkillLayout icon={<HTML5 />} name="HTML5" limit={97} />
      <SkillLayout icon={<CSS3 />} name="CSS3" limit={88} />
      <SkillLayout icon={<Docker />} name="Docker" limit={60} />
      <SkillLayout icon={<Mongodb />} name="Mongodb" limit={45} />
      <SkillLayout icon={<Firebase />} name="Firebase" limit={60} />
      <SkillLayout icon={<MySQL />} name="My SQL" limit={45} />
    </div>
  );
};

export default SkillSection;
