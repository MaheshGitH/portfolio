import React from "react";
import CustomTitle from "./CustomTitle";
import IconLayout from "./IconLayout";
import { FirebaseIcon, MongoIcon, PrismaIcon, SocketIoIcon } from "./icons";

const Backend = () => {
  return (
    <div className="flex flex-col gap-8">
      <CustomTitle>Backend Development</CustomTitle>
      <div className="flex flex-wrap items-center gap-8">
        Databases:
        <IconLayout name="MongoDB">
          <MongoIcon />
        </IconLayout>
        <IconLayout name="Firebase" hover="hover:text-yellow-500">
          <FirebaseIcon className="size-9" />
        </IconLayout>
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-8">
          Libraries:
          <IconLayout name="Prisma">
            <PrismaIcon className="size-9" />
          </IconLayout>
          <IconLayout name="Socket io">
            <SocketIoIcon className="size-9" />
          </IconLayout>
        </div>
      </div>
    </div>
  );
};

export default Backend;
