import React from "react";
import Introduction from "./components/intro/Introduction";
import BriefJourney from "./components/brief/BriefJourney";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";

export default function Page() {
  return (
    <main>
      <Nav />
      <Introduction />
      <BriefJourney />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
