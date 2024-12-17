import React from "react";
import CustomTitle from "./CustomTitle";
import IconLayout from "./IconLayout";
import { FirebaseIcon, MongoIcon, PrismaIcon, SocketIoIcon } from "./icons";
import CustomLayout from "./CustomLayout";

const Backend = () => {
  return (
    <div className="flex flex-col gap-8">
      <CustomTitle>Backend Development</CustomTitle>
      <CustomLayout title="Databases">
        <IconLayout name="MongoDB">
          <MongoIcon />
        </IconLayout>
        <IconLayout name="Firebase" hover="hover:text-yellow-500">
          <FirebaseIcon className="size-8" />
        </IconLayout>
      </CustomLayout>

      <CustomLayout title="Libraries">
        <IconLayout name="Prisma">
          <PrismaIcon className="size-7" />
        </IconLayout>
        <IconLayout name="Socket io">
          <SocketIoIcon className="size-7" />
        </IconLayout>
      </CustomLayout>
    </div>
  );
};

export default Backend;
