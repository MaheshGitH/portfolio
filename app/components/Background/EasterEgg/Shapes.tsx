import React, { useEffect, useState } from "react";
import { HoverState } from "./EasterEgg";

interface Props {
  state: HoverState;
  congrats: (value: boolean) => void;
}

const Shapes = ({ state, congrats }: Props) => {
  const [clickState, setClickState] = useState({
    leftTopRect: false,
    rightTopTri: false,
    leftBottomTri: false,
    middleTri: false,
    middleRect: false,
    middleGrid: false,
    rightBottomRect: false,
  });

  useEffect(() => {
    if (!state.state) return;
    setClickState({
      leftTopRect:
        state.id === "LeftTopRect" || clickState.leftTopRect ? true : false,
      rightTopTri:
        state.id === "RightTopTri" || clickState.rightTopTri ? true : false,
      leftBottomTri:
        state.id === "LeftBottomTri" || clickState.leftBottomTri ? true : false,
      middleTri:
        state.id === "MiddleTri" || clickState.middleTri ? true : false,
      middleRect:
        state.id === "MiddleRect" || clickState.middleRect ? true : false,
      middleGrid:
        state.id === "MiddleGrid" || clickState.middleGrid ? true : false,
      rightBottomRect:
        state.id === "RightBottomRect" || clickState.rightBottomRect
          ? true
          : false,
    });
  }, [state]);

  useEffect(() => {
    if (
      clickState.leftBottomTri &&
      clickState.leftTopRect &&
      clickState.middleGrid &&
      clickState.middleRect &&
      clickState.middleTri &&
      clickState.rightBottomRect &&
      clickState.rightTopTri
    ) {
      congrats(true);
    }
  }, [clickState]);

  return (
    <div className="absolute inset-0 -z-50">
      <div
        className={`~lg/2xl:~size-32/40 ${
          state.id === "LeftTopRect" || clickState.leftTopRect
            ? "bg-design-dark"
            : "bg-design-dark/0"
        } rounded-tr-lg rounded-b-lg absolute top-0 left-0 duration-300`}
      />
      <div className="absolute top-0 right-0">
        <svg
          className="~lg/2xl:~size-24/32"
          viewBox="0 0 109 109"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${
              state.id === "RightTopTri" || clickState.rightTopTri
                ? "fill-[#1e1e1e]"
                : "fill-[#1e1e1e]/0"
            }  duration-300`}
            d="M2.65686 13.6569C-2.38286 8.61713 1.18647 -7.62939e-06 8.31371 -7.62939e-06H101C105.418 -7.62939e-06 109 3.58172 109 7.99999V100.686C109 107.814 100.383 111.383 95.3431 106.343L2.65686 13.6569Z"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 group">
        <svg
          className="~lg/2xl:~size-24/32"
          viewBox="0 0 109 109"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={` ${
              state.id === "LeftBottomTri" || clickState.leftBottomTri
                ? "fill-[#1e1e1e]"
                : "fill-[#1e1e1e]/0"
            }  duration-300`}
            d="M2.65686 13.6569C-2.38286 8.61713 1.18647 -7.62939e-06 8.31371 -7.62939e-06H101C105.418 -7.62939e-06 109 3.58172 109 7.99999V100.686C109 107.814 100.383 111.383 95.3431 106.343L2.65686 13.6569Z"
          />
        </svg>
      </div>

      <div
        className={`absolute top-1/2 left-[20%] -translate-y-1/2 ~lg/2xl:~size-32/40 rounded-tr-lg
    rounded-br-lg rounded-bl-lg rounded-tl-[200px] ${
      state.id === "MiddleTri" || clickState.middleTri
        ? "bg-design-dark"
        : "bg-design-dark/0"
    } duration-300`}
      />
      <div
        className={`absolute top-[15%] right-1/2 translate-x-1/2 ~lg/2xl:~size-32/40 rounded-t-[90px] rounded-b-lg ${
          state.id === "MiddleRect" || clickState.middleRect
            ? "bg-design-dark"
            : "bg-design-dark/0"
        } duration-300`}
      />
      <div className="absolute top-2/3 right-1/4">
        <svg
          className={`~lg/2xl:~size-32/40  ${
            state.id === "MiddleGrid" || clickState.middleGrid
              ? "fill-[#1e1e1e]"
              : "fill-[#1e1e1e]/0"
          } duration-300`}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#cha1)">
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
        className={`absolute ~lg/2xl:~size-32/40 bottom-0 right-0 rounded-t-lg rounded-bl-lg ${
          state.id === "RightBottomRect" || clickState.rightBottomRect
            ? "bg-design-dark"
            : "bg-design-dark/0"
        } duration-300`}
      />
    </div>
  );
};

export default Shapes;
