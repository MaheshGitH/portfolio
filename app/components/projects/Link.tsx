import React from "react";

interface Props {
  website: string;
  blog?: string;
}

const Link = ({ website, blog }: Props) => {
  return (
    <div className="flex flex-col">
      <span className="text-accent font-semibold mb-5 xl:mb-10 lg:text-lg">
        Links
      </span>
      <p className="mb-3 font-semibold lg:text-[17px]">
        Website :{" "}
        {website === "Not yet" ? (
          <span className="font-normal text-link line-through cursor-default">
            {website}
          </span>
        ) : (
          <a
            href={website}
            target="_blank"
            className="font-normal text-link underline"
          >
            {website}
          </a>
        )}
      </p>

      {blog ? (
        <p className="mb-3 font-semibold lg:text-[17px]">
          Blog :{" "}
          {blog === "Not yet" ? (
            <span className="font-normal text-link line-through cursor-default">
              {blog}
            </span>
          ) : (
            <a
              href={blog}
              target="_blank"
              className="font-normal text-link underline"
            >
              {blog}
            </a>
          )}
        </p>
      ) : null}
    </div>
  );
};

export default Link;
