import React from "react";

interface Props {
  websiteName: string;
  blog?: string;
}

const Link = ({ websiteName, blog }: Props) => {
  return (
    <div className="flex flex-col">
      <span className="text-accent font-semibold mb-5 lg:text-lg">Links</span>
      <p className="mb-3 font-semibold lg:text-[17px]">
        Website :{" "}
        <span className="border-b font-normal text-link border-link">
          {websiteName}
        </span>
      </p>

      {blog ? (
        <p className="mb-3 font-semibold lg:text-[17px]">
          Blog :{" "}
          <span className="border-b font-normal text-link border-link">
            {blog}
          </span>
        </p>
      ) : null}
    </div>
  );
};

export default Link;
