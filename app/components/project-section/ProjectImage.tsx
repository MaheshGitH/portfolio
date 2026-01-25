import Image from "next/image";

interface Props {
  firstImage: string;
  secondImage?: string;
  firstAlt: string;
  secondAlt?: string;
}

const ProjectImage = ({
  firstImage,
  secondImage,
  firstAlt,
  secondAlt,
}: Props) => {
  return (
    <div className="h-[16.5rem] ~/md:~w-[18.875]/[27.563rem]  relative overflow-hidden rounded-t-xl ">
      <div>
        <Image
          src={`/${firstImage}`}
          alt={firstAlt}
          height={secondImage ? 168 : 264}
          width={443}
        />
      </div>
      {secondImage ? (
        <div className="absolute top-28 bg-white">
          <Image
            src={`/${secondImage}`}
            alt={secondAlt ? secondAlt : ""}
            height={168}
            width={443}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ProjectImage;
