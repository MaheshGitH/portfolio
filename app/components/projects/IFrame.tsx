"use client";

import React, { useState } from "react";
import { HiMiniSignal } from "react-icons/hi2";
import { RiFullscreenLine } from "react-icons/ri";
import NotLive from "./NotLive";
import FullScreen from "./FullScreen";

interface Props {
  websiteLink: string;
}

const IFrame = ({ websiteLink }: Props) => {
  const [fullScreen, setFullScreen] = useState(false);

  const handleClick = () => {
    setFullScreen(true);
  };

  return (
    <>
      <FullScreen
        state={fullScreen}
        setState={(value) => setFullScreen(value)}
        src={websiteLink}
      />
      <div className="flex flex-col gap-2 h-80 md:h-[22rem] lg:h-[24rem] xl:h-[26rem] 2xl:h-[30rem] text-accent border border-accent rounded-xl p-2 duration-500 w-full max-w-6xl">
        <div className="flex justify-between">
          <span className="flex items-center gap-2 relative">
            <HiMiniSignal className="size-5 xl:size-6" />
            <p className="text-xs xl:text-sm">Live Preview</p>
            {websiteLink === "Not yet" ? (
              <span className="w-full h-px bg-white absolute" />
            ) : null}
          </span>
          <button
            className={`flex items-center gap-2 bg-slate-700 px-2 py-1 rounded-lg  duration-300 ${
              websiteLink === "Not yet"
                ? " opacity-60 "
                : " hover:text-white hover:bg-slate-600 "
            }`}
            disabled={websiteLink === "Not yet" ? true : false}
            onClick={handleClick}
          >
            <RiFullscreenLine className="size-5 xl:size-6" />
            <p className="text-xs xl:text-sm">Full screen</p>
          </button>
        </div>
        <div className="size-full overflow-hidden border bg-white rounded-xl duration-500">
          {websiteLink === "Not yet" ? (
            <NotLive />
          ) : (
            <iframe className="size-full" src={websiteLink}></iframe>
          )}
        </div>
      </div>
    </>
  );
};

export default IFrame;
