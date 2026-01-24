import AboutSection from "./components/about-section/AboutSection";
import ContactSection from "./components/contact-section/ContactSection";
import ProjectSection from "./components/project-section/ProjectSection";
import SkillsSection from "./components/skills-section/SkillsSection";
import TopSection from "./components/top-section/TopSection";

export default function Home() {
  return (
    <div className="px-2 max-w-[1520px] mx-auto">
      <TopSection />
      <div className="flex flex-col gap-44">
        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </div>
  );
}
