import React, { useEffect, useState } from "react";
import toggleDark from "./toggleDark";

const ThemeButton = () => {
  const [theme, setTheme] = useState<"DARK" | "LIGHT">();
  useEffect(() => {
    const bodyELement = document.body.classList;
    setTheme(bodyELement.contains("dark") ? "DARK" : "LIGHT");
  }, []);
  return (
    <button onClick={() => setTheme(toggleDark())}>
      <span className="text-primary mr-2">Theme:</span>
      <span className="text-secondary-light hover:text-primary-light hover:dark:text-primary-dark duration-200">
        {theme}
      </span>
    </button>
  );
};

export default ThemeButton;
