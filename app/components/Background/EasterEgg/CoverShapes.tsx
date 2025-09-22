import React from "react";
import { Id } from "./EasterEgg";

interface Props {
  state: (id: Id, state?: boolean) => void;
}

const CoverShapes = ({ state }: Props) => {
  return (
    <div>
      <div
        onMouseEnter={() => {
          state("LeftTopRect");
        }}
        onMouseLeave={() => {
          state("");
        }}
        onClick={() => {
          state("LeftTopRect", true);
        }}
        className="~lg/2xl:~size-32/40 bg-white/0 rounded-tr-lg rounded-b-lg absolute top-0 left-0 z-50"
      />
      <div className="absolute top-0 right-0 z-50">
        <svg
          className="~lg/2xl:~size-24/32"
          viewBox="0 0 109 109"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            onMouseEnter={() => {
              state("RightTopTri");
            }}
            onMouseLeave={() => {
              state("");
            }}
            onClick={() => {
              state("RightTopTri", true);
            }}
            className="fill-white/0"
            d="M2.65686 13.6569C-2.38286 8.61713 1.18647 -7.62939e-06 8.31371 -7.62939e-06H101C105.418 -7.62939e-06 109 3.58172 109 7.99999V100.686C109 107.814 100.383 111.383 95.3431 106.343L2.65686 13.6569Z"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 z-50">
        <svg
          className="~lg/2xl:~size-24/32"
          viewBox="0 0 109 109"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            onMouseEnter={() => {
              state("LeftBottomTri");
            }}
            onMouseLeave={() => {
              state("");
            }}
            onClick={() => {
              state("LeftBottomTri", true);
            }}
            className="fill-white/0"
            d="M2.65686 13.6569C-2.38286 8.61713 1.18647 -7.62939e-06 8.31371 -7.62939e-06H101C105.418 -7.62939e-06 109 3.58172 109 7.99999V100.686C109 107.814 100.383 111.383 95.3431 106.343L2.65686 13.6569Z"
          />
        </svg>
      </div>
      <div
        onMouseEnter={() => {
          state("MiddleTri");
        }}
        onMouseLeave={() => {
          state("");
        }}
        onClick={() => {
          state("MiddleTri", true);
        }}
        className="absolute top-1/2 left-[20%] -translate-y-1/2 ~lg/2xl:~size-32/40 rounded-tr-lg
    rounded-br-lg rounded-bl-lg rounded-tl-[200px] bg-white/0 z-50"
      />
      <div
        onMouseEnter={() => {
          state("MiddleRect");
        }}
        onMouseLeave={() => {
          state("");
        }}
        onClick={() => state("MiddleRect", true)}
        className="absolute top-[15%] right-1/2 translate-x-1/2 ~lg/2xl:~size-32/40 rounded-t-[90px] rounded-b-lg bg-white/0 z-50"
      />
      <div
        onMouseEnter={() => {
          state("MiddleGrid");
        }}
        onMouseLeave={() => {
          state("");
        }}
        onClick={() => state("MiddleGrid", true)}
        className="absolute top-2/3 right-1/4 z-50"
      >
        <svg
          className="~lg/2xl:~size-32/40"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="fill-white/0" clipPath="url(#cha1)">
            <circle cx="4" cy="4" r="4" />
            <circle cx="52" cy="4" r="4" />
            <circle cx="100" cy="4" r="4" />
            <circle cx="148" cy="4" r="4" />
            <circle cx="196" cy="4" r="4" />
            <circle cx="4" cy="52" r="4" />
            <circle cx="52" cy="52" r="4" />
            <circle cx="100" cy="52" r="4" />
            <circle cx="148" cy="52" r="4" />
            <circle cx="196" cy="52" r="4" />
            <circle cx="4" cy="100" r="4" />
            <circle cx="52" cy="100" r="4" />
            <circle cx="100" cy="100" r="4" />
            <circle cx="148" cy="100" r="4" />
            <circle cx="196" cy="100" r="4" />
            <circle cx="4" cy="148" r="4" />
            <circle cx="52" cy="148" r="4" />
            <circle cx="100" cy="148" r="4" />
            <circle cx="148" cy="148" r="4" />
            <circle cx="196" cy="148" r="4" />
            <circle cx="4" cy="196" r="4" />
            <circle cx="52" cy="196" r="4" />
            <circle cx="100" cy="196" r="4" />
            <circle cx="148" cy="196" r="4" />
            <circle cx="196" cy="196" r="4" />
          </g>
          <defs>
            <clipPath id="cha1">
              <rect width="200" height="200" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        onMouseEnter={() => {
          state("RightBottomRect");
        }}
        onMouseLeave={() => {
          state("");
        }}
        onClick={() => state("RightBottomRect", true)}
        className="absolute ~lg/2xl:~size-32/40 bottom-0 right-0 rounded-t-lg rounded-bl-lg bg-white/0 z-50"
      />
    </div>
  );
};

export default CoverShapes;
