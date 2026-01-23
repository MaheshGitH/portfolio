import SectionHeader from "@/app/common-components/SectionHeader";
import ProjectCard from "./ProjectCard";
import { projectCard } from "./content";

const ProjectSection = () => {
  return (
    <div>
      <SectionHeader section="03." title="Projects" />

      <div className="grid mx-auto w-full gap-8">
        {projectCard.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
