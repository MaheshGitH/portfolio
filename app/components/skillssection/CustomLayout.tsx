import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const CustomLayout = ({ title, children }: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-8 ml-4">
      {title}:{children}
    </div>
  );
};

export default CustomLayout;
