import React from "react";
import Introduction from "./components/intro/Introduction";
import BriefJourney from "./components/brief/BriefJourney";
import Test from "./Test";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Input from "./components/contact/Input";

export default function Page() {
  return (
    <main>
      <Introduction />
      <BriefJourney />
      <Skills />
      <Projects />
      <Contact />

      {/* <Test></Test> */}
    </main>
  );
}
