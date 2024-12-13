import React from "react";
import CustomTitle from "./CustomTitle";
import IconLayout from "./IconLayout";
import { DockerIcon } from "./icons";

const DevOpsDeployment = () => {
  return (
    <div className="flex flex-col gap-8">
      <CustomTitle>DevOps & Deployment</CustomTitle>
      <div className="flex flex-wrap items-center gap-8">
        Technology:
        <IconLayout name="Docker" hover="hover:text-blue-600">
          <DockerIcon className="size-8" />
        </IconLayout>
      </div>
    </div>
  );
};

export default DevOpsDeployment;
