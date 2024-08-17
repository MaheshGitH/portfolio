import React from "react";

interface Props {
  data: {
    monthYear: string;
    description: string;
  };
}

const Journey = ({ data }: Props) => {
  return (
    <div className="flex flex-col h-[120px] gap-2">
      <p className="font-black mb-2 text-xl xl:text-2xl duration-500">
        {data.monthYear}
      </p>
      <p
        dangerouslySetInnerHTML={{ __html: data.description }}
        className="text-accent text-[14px] xl:text-[16px] w-full md:max-w-md xl:max-w-lg"
      />
    </div>
  );
};

export default Journey;
