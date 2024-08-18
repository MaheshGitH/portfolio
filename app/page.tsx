import React from "react";
import {
  BriefJourney,
  Contact,
  Introduction,
  Nav,
  Projects,
  Skills,
} from "./components";

export default function Page() {
  return (
    <>
      <Nav />

      <main>
        <Introduction />
        <BriefJourney />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
