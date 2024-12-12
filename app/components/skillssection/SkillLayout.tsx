import React from "react";

interface Props {
  icon: React.JSX.Element;
  limit: number;
  name: string;
}

const SkillLayout = ({ icon, name, limit }: Props) => {
  return <div className="flex flex-col w-full gap-2"></div>;
};

export default SkillLayout;
