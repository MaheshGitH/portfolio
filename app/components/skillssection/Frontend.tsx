import React from "react";
import CustomTitle from "./CustomTitle";
import IconLayout from "./IconLayout";
import {
  HTMLIcon,
  CSSIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
} from "./icons";
import { NextjsIcon } from "./icons";

const Frontend = () => {
  return (
    <div className="flex flex-col gap-8">
      <CustomTitle>Frontend Development</CustomTitle>
      <div className="flex flex-wrap items-center gap-8">
        Languages:
        <IconLayout name="HTML" hover="hover:text-red-600">
          <HTMLIcon className="size-9" />
        </IconLayout>
        <IconLayout name="CSS" hover="hover:text-blue-600">
          <CSSIcon className="size-9" />
        </IconLayout>
        <IconLayout name="Javascript" hover="hover:text-yellow-500">
          <JavaScriptIcon className="size-9" />
        </IconLayout>
        <IconLayout name="Typescript" hover="hover:text-blue-800">
          <TypeScriptIcon className="size-9" />
        </IconLayout>
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-8">
          Libraries/Frameworks:
          <IconLayout name="React" hover="hover:text-blue-400">
            <ReactIcon className="size-9" />
          </IconLayout>
          <IconLayout name="Next.js">
            <NextjsIcon />
          </IconLayout>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
