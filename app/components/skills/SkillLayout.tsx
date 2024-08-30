import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const SkillLayout = ({ title, children }: Props) => {
  return (
    <div>
      <p className="font-semibold text-xl mb-10 lg:text-2xl duration-500">
        {title}
      </p>
      <div className="grid grid-cols-1 min-[390px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-9">
        {children}
      </div>
    </div>
  );
};

export default SkillLayout;
