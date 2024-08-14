import React from "react";
import { HiMiniSignal } from "react-icons/hi2";

const IFrame = () => {
  return (
    <div className="w-72 h-80 xl:w-80 xl:h-[22rem] 2xl:w-96 2xl:h-[26rem] mt-10 xl:mt-0 flex flex-col gap-2 text-accent border border-accent rounded-xl p-2 duration-500">
      <span className="flex items-center gap-2">
        <HiMiniSignal className="size-5 xl:size-6" />
        <p className="text-xs xl:text-sm">Live Preview</p>
      </span>
      <div className="w-[calc(16rem+14px)] h-72 xl:w-[calc(18rem+14px)] xl:h-80 2xl:w-[calc(23rem)] 2xl:h-96 m-auto bg-white rounded-xl duration-500"></div>
    </div>
  );
};

export default IFrame;
