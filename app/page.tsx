import React from "react";
import HomeSection from "./components/homesection/HomeSection";
import SkillSection from "./components/skillssection/SkillSection";
import ProjectSection from "./components/projectsection/ProjectSection";
import ContactSection from "./components/contactsection/ContactSection";
import TopSection from "./components/TopSection";

export default function Page() {
  return (
    <>
      <TopSection />
      <HomeSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
