import React from "react";
import HomeSection from "./components/homesection/HomeSection";
import SkillSection from "./components/skillssection/SkillSection";
import ProjectSection from "./components/projectsection/ProjectSection";
import ContactSection from "./components/contactsection/ContactSection";
import TopSection from "./components/topsection/TopSection";
import AboutMeSection from "./components/aboutsection/AboutMeSection";

export default function Page() {
  return (
    <>
      <TopSection />
      <HomeSection />
      <AboutMeSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
