import Tag from "@/app/common-components/Tag";
import ProjectImage from "./ProjectImage";
import Live from "./Live";
import Code from "./Code";
import type { ProjectCard } from "./content";
import HoverEffectContainer from "@/app/common-components/HoverEffectContainer";

const ProjectCard = ({
  description,
  images,
  links,
  tags,
  title,
}: ProjectCard) => {
  return (
    <HoverEffectContainer className="rounded-xl" radius={400}>
      <div className="bg-background ~/md:~w-[19rem]/[27.688rem] border border-border rounded-xl">
        {
          <ProjectImage
            firstImage={images.image_1}
            firstAlt={images.alt_1}
            secondImage={images.image_2}
            secondAlt={images.alt_2}
          />
        }

        <div className="~/md:~p-4/8 ~/md:~text-xs/sm ">
          <div className=" flex flex-col gap-3">
            <p className="~/md:~text-base/xl font-semibold">{title}</p>
            <p className="text-secondary">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Tag key={index} name={tag} reducePadding />
              ))}
            </div>
          </div>
          <div className="flex flex-col sml:flex-row gap-4 mt-8">
            <Live liveLink={links.live} hide={links.live === "nolink"} />
            <Code sourceLink={links.source} wFull={links.live === "nolink"} />
          </div>
        </div>
      </div>
    </HoverEffectContainer>
  );
};

export default ProjectCard;
