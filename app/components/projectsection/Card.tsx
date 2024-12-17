import React from "react";
import Image from "next/image";
import type { ThreeImage, ThreePos } from "./types";

interface Props {
  imageSrc: ThreeImage;
  imagePos: ThreePos;
  bgColor: string;
}

const Card = ({ imageSrc, imagePos, bgColor }: Props) => {
  return (
    <div className={`mt-40 h-[344px] w-[344px] relative ${bgColor} mx-auto`}>
      <div className="h-[200px] w-[150px] rounded-lg absolute -z-10 overflow-hidden">
        <Image
          alt="overview page"
          src={imageSrc.src1}
          fill
          className={`object-cover scale-125 ${imagePos.pos1}`}
        />
      </div>

      <div className="rounded-lg h-[200px] w-[150px] overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4">
        <Image
          alt="overview page"
          src={imageSrc.src2}
          fill
          className={`object-cover ${imagePos.pos2}`}
        />
      </div>
      <div className="rounded-lg h-[200px] w-[150px] absolute right-0 top-1/3 -translate-y-1/4 z-10 overflow-hidden">
        <Image
          alt="overview page"
          src={imageSrc.src3}
          fill
          className={`object-cover scale-105 ${imagePos.pos3}`}
        />
      </div>
    </div>
  );
};
export default Card;
