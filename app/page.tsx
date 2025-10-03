import React from "react";

import Background from "./components/Background/Background";
import Nav from "./components/Nav/Nav";
import BottomSection from "./components/BottomSection/BottomSection";

export default function Page() {
  return (
    <div>
      <Nav></Nav>
      <Background />
      <BottomSection />
    </div>
  );
}
