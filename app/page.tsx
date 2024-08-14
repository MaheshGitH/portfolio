import React from "react";
import Introduction from "./components/intro/Introduction";
import BriefJourney from "./components/brief/BriefJourney";
import Test from "./Test";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

export default function Page() {
  return (
    <main>
      <Introduction />
      <BriefJourney />
      <Skills />
      <Projects />

      {/* <Test></Test> */}
    </main>
  );
}
