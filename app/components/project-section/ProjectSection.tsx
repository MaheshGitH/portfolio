import SectionHeader from "@/app/common-components/SectionHeader";
import ProjectCard from "./ProjectCard";
import { projectCard } from "./content";

const ProjectSection = () => {
  return (
    <div>
      <SectionHeader section="03." title="Projects" />

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mx-auto w-fit gap-8">
        {projectCard.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
