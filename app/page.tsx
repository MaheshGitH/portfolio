import React from "react";
import Introduction from "./components/intro/Introduction";
import BriefJourney from "./components/brief/BriefJourney";
import Test from "./Test";
import Skills from "./components/skills/Skills";

export default function Page() {
  return (
    <main>
      <Introduction />
      <BriefJourney />
      <Skills />
      {/* <Test></Test> */}
    </main>
  );
}
