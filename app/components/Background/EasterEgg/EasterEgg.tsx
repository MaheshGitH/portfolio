import React, { useState } from "react";
import Shapes from "./Shapes";
import CoverShapes from "./CoverShapes";

export interface HoverState {
  state: boolean;
  id: Id;
}

export type Id =
  | "LeftTopRect"
  | "LeftBottomTri"
  | "MiddleRect"
  | "MiddleTri"
  | "MiddleGrid"
  | "RightBottomRect"
  | "RightTopTri"
  | "";

interface Props {
  congrats: (value: boolean) => void;
}

const EasterEgg = ({ congrats }: Props) => {
  const [hover, setHover] = useState<HoverState>({ id: "", state: false });

  return (
    <div className="hidden relative inset-0 h-screen lg:block">
      <CoverShapes state={(id, state) => setHover({ id, state })} />
      <Shapes
        congrats={(value) => {
          congrats(value);
          console.log(value);
        }}
        state={hover}
      />
    </div>
  );
};

export default EasterEgg;
