import React from "react";

interface Props {
  src: string;
}

const CustomImage = ({ src }: Props) => {
  return <img className="max-w-3xl w-full" src={src} />;
};
export default CustomImage;
