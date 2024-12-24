"use client";

import { ReactNode, useRef } from "react";

interface Props {
  hover?: string;
  children: ReactNode;
  name: string;
}

const IconLayout = ({ hover, children, name }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div tabIndex={0} ref={ref} className="flex items-center gap-2 group">
      <div
        className={`size-12 text-black ${hover} duration-200 bg-white flex justify-center items-center rounded-lg relative`}
      >
        {children}

        <span
          onClick={() => ref.current.focus()}
          className="absolute text-base rounded-lg text-black bg-white py-1 px-4 top-0 scale-0 group-hover:scale-100 group-hover:-top-full duration-150 after:contents-[''] after:absolute after:-bottom-1 after:right-1/2 after:translate-x-1/2 after:rounded-full after:bg-white after:size-4 after:-z-10 group-focus:-top-full group-focus:scale-100 text-nowrap lg:hidden"
        >
          {name}
        </span>
      </div>
      <span className="hidden lg:inline-block cursor-default">{name}</span>
    </div>
  );
};

export default IconLayout;
