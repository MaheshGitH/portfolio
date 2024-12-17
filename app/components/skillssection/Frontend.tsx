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
import CustomLayout from "./CustomLayout";

const Frontend = () => {
  return (
    <div className="flex flex-col gap-8">
      <CustomTitle>Frontend Development</CustomTitle>

      <CustomLayout title="Languages">
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
      </CustomLayout>

      <CustomLayout title="Libraries/Frameworks">
        <IconLayout name="React" hover="hover:text-blue-400">
          <ReactIcon className="size-9" />
        </IconLayout>
        <IconLayout name="Next.js">
          <NextjsIcon />
        </IconLayout>
      </CustomLayout>
    </div>
  );
};

export default Frontend;
