import React from "react";
import { HiMiniSignal } from "react-icons/hi2";
import { RiFullscreenLine } from "react-icons/ri";

interface Props {
  websiteLink: string;
}

const IFrame = ({ websiteLink }: Props) => {
  return (
    <div className="flex flex-col gap-2 h-80 lg:h-[22rem] xl:h-[26rem] 2xl:h-[30rem] mt-10 text-accent border border-accent rounded-xl p-2 duration-500 w-full max-w-6xl">
      <div className="flex justify-between">
        <span className="flex items-center gap-2">
          <HiMiniSignal className="size-5 xl:size-6" />
          <p className="text-xs xl:text-sm">Live Preview</p>
        </span>
        <button className="flex items-center gap-2 bg-slate-700 px-2 py-1 rounded-lg hover:text-white hover:bg-slate-600 duration-300">
          <RiFullscreenLine className="size-5 xl:size-6" />
          <p className="text-xs xl:text-sm">Full screen</p>
        </button>
      </div>
      <div className="size-full overflow-hidden bg-white rounded-xl duration-500">
        {websiteLink === "Not yet" ? (
          <div className="size-full flex flex-col justify-center items-center bg-black">
            <span className="text-4xl md:text-5xl lg:text-6xl text-white">
              4<span className="">0</span>4
            </span>
            <span>helo</span>
          </div>
        ) : (
          <iframe className="size-full" src={websiteLink}></iframe>
        )}
      </div>
    </div>
  );
};

export default IFrame;
