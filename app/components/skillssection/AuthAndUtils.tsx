import React from "react";
import CustomTitle from "./CustomTitle";
import IconLayout from "./IconLayout";
import { AuthIcon } from "./icons";
import CustomLayout from "./CustomLayout";

const AuthAndUtils = () => {
  return (
    <div className="flex flex-col gap-8">
      <CustomTitle>Authentication & Utilities</CustomTitle>
      <CustomLayout title="Library">
        <IconLayout name="Auth.js">
          <AuthIcon />
        </IconLayout>
      </CustomLayout>
    </div>
  );
};

export default AuthAndUtils;
