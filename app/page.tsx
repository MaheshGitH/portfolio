import AboutSection from "./components/about-section/AboutSection";
import SkillsSection from "./components/skills-section/SkillsSection";
import TopSection from "./components/top-section/TopSection";

export default function Home() {
  return (
    <div className="px-2 max-w-[1520px] mx-auto">
      <TopSection />
      <div className="flex flex-col gap-44">
        <AboutSection />
        <SkillsSection />
      </div>
    </div>
  );
}
