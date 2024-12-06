import React from "react";
import Meter from "./Meter";

interface Props {
  icon: React.JSX.Element;
  limit: number;
  name: string;
}

const SkillLayout = ({ icon, name, limit }: Props) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex items-end gap-2">
        <span className="block">{icon}</span>
        <p>{name}</p>
      </div>
      <Meter limit={limit} />
    </div>
  );
};

export default SkillLayout;
