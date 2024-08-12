import React from "react";

interface Props {
  data: {
    monthYear: string;
    description: string;
  };
}

const Journey = ({ data }: Props) => {
  return (
    <div className="flex flex-col h-[120px] gap-3 lg:gap-5">
      <p className="font-black mb-2 text-xl lg:text-2xl duration-500">
        {data.monthYear}
      </p>
      <p className="text-accent text-[14px] lg:text-[16px] xl:text-lg w-full md:max-w-md lg:max-w-lg">
        {data.description}
      </p>
    </div>
  );
};

export default Journey;
