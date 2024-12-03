import React from "react";
import Background from "./components/Background";
import Picture from "./components/Picture";

import BottomSection from "./components/BottomSection";

export default function Page() {
  return (
    <main className="relative">
      <Background />
      <Picture />
      <BottomSection />
    </main>
  );
}
