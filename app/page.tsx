import React from "react";
import HomeSection from "./components/homesection/HomeSection";
import SkillSection from "./components/skillssection/SkillSection";
import ProjectSection from "./components/projectsection/ProjectSection";
import ContactSection from "./components/contactsection/ContactSection";

export default function Page() {
  return (
    <>
      <HomeSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
