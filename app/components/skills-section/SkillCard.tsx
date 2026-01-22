import Tag from "@/app/common-components/Tag";
import { SkillCardType } from "./SkillsSection";

const SkillCard = ({ Icon, name, tags }: SkillCardType) => {
  return (
    <div className="flex flex-col gap-6 bg-surface border border-border rounded-xl ~p-4/8 hover:border-primary/50 duration-150 max-w-96 w-full">
      <div className="bg-primary-faded text-primary p-3 rounded-lg mb-2 w-fit">
        <Icon className="~size-7/8" />
      </div>
      <p className="text-xl font-bold">{name}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Tag key={index} name={tag} />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
