import React from "react";
import CustomTitle from "./CustomTitle";
import IconLayout from "./IconLayout";
import { DockerIcon } from "./icons";
import CustomLayout from "./CustomLayout";

const DevOpsDeployment = () => {
  return (
    <div className="flex flex-col gap-8">
      <CustomTitle>DevOps & Deployment</CustomTitle>
      <CustomLayout title="Technology">
        <IconLayout name="Docker" hover="group-hover:text-blue-600">
          <DockerIcon className="size-8" />
        </IconLayout>
      </CustomLayout>
    </div>
  );
};

export default DevOpsDeployment;
