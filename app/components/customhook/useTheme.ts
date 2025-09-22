import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">();

  useEffect(() => {
    const bodyElement = document.body;

    if (bodyElement.classList.contains("light")) {
      setTheme("light");
    } else if (bodyElement.classList.contains("dark")) {
      setTheme("dark");
    }

    const observer = new MutationObserver(() => {
      if (bodyElement.classList.contains("light")) {
        setTheme("light");
      } else if (bodyElement.classList.contains("dark")) {
        setTheme("dark");
      }
    });

    observer.observe(bodyElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return theme;
}
