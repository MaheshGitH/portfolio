import SectionHeader from "@/app/common-components/SectionHeader";
import SkillCard from "./SkillCard";
import { CodeXml, LucideIcon, Server, Wrench } from "lucide-react";

const SkillsSection = () => {
  return (
    <div className="flex flex-col">
      <SectionHeader section="02." title="Skills" />
      <div className="flex flex-wrap justify-center gap-8">
        {skillCard.map((skill, index) => (
          <SkillCard
            key={index}
            Icon={skill.Icon}
            name={skill.name}
            tags={skill.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

export interface SkillCardType {
  Icon: LucideIcon;
  name: string;
  tags: string[];
}

const frontend = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Zustand",
  "TanStack Table",
];

const backend = [
  "Express",
  "Socket.IO",
  "Prisma",
  "MongoDB",
  "Firebase",
  "Auth.js",
];

const tools = ["Docker", "Linux", "Figma"];

const skillCard: SkillCardType[] = [
  { Icon: CodeXml, name: "Frontend", tags: frontend },
  { Icon: Server, name: "Backend", tags: backend },
  { Icon: Wrench, name: "Tools & Workflow", tags: tools },
];
