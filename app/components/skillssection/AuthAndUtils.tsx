import React from "react";
import CustomTitle from "./CustomTitle";
import IconLayout from "./IconLayout";
import { AuthIcon } from "./icons";

const AuthAndUtils = () => {
  return (
    <div className="flex flex-col gap-8">
      <CustomTitle>Authentication & Utilities</CustomTitle>
      <div className="flex flex-wrap items-center gap-8">
        Library:
        <IconLayout name="Auth.js">
          <AuthIcon />
        </IconLayout>
      </div>
    </div>
  );
};

export default AuthAndUtils;
