import { useEffect, useRef, useState } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState("");
  const isManualScroll = useRef(false);

  const setActiveManually = (id: string) => {
    isManualScroll.current = true;
    setActiveSection(id);

    setTimeout(() => {
      isManualScroll.current = false;
    }, 0);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return { activeSection, setActiveManually };
};
