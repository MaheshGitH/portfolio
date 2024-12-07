import React from "react";
import Tag from "./Tag";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";

interface Props {
  name: string;
  description: string;
  link: string;
}

const CardTopSection = ({ name, description, link }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 items-center">
        <h2 className="font-stylish text-4xl">{name}</h2>
        <Tag />
      </div>
      <p>{description}</p>
      <p>
        Live at:{" "}
        <Link
          target="_blank"
          className="text-secondary underline underline-offset-4"
          href="https://yt-stats.netlify.app"
        >
          {link}
          <RiExternalLinkLine className="inline-block size-4 ml-px mt-1" />
        </Link>
      </p>
    </div>
  );
};

export default CardTopSection;
