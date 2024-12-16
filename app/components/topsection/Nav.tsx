import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavLayout from "./NavLayout";

interface Props {
  navState: boolean;
  setNavState: () => void;
}

type InViewItem =
  | "Home"
  | "About me"
  | "Skills"
  | "Projects"
  | "Contact"
  | null;

const Nav = ({ navState, setNavState }: Props) => {
  const [inView, setInView] = useState<InViewItem>(null);
  const handleScrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      setNavState();
    }
  };

  useEffect(() => {
    const sections = [
      { id: "Home", threshold: 0 },
      { id: "About me", threshold: 0.3 },
      { id: "Skills", threshold: 0.3 },
      { id: "Projects", threshold: 0.2 },
      { id: "Contact", threshold: 0.3 },
    ];

    const observerHandler = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find((s) => s.id === entry.target.id);
          if (section) setInView(section.id as InViewItem);
        }
      });
    };
    let observer: IntersectionObserver;

    sections.forEach((s) => {
      observer = new IntersectionObserver(observerHandler, {
        threshold: s.threshold,
      });
      const element = document.getElementById(s.id);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.ul
      animate={{ opacity: navState ? 1 : 0, scale: navState ? 1 : 0.95 }}
      initial={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.3,
      }}
      style={{ pointerEvents: navState ? "auto" : "none" }}
      className="flex flex-col gap-8 absolute top-8 right-5 text-nowrap translate-x-0 bg-white/5 border border-secondary backdrop-blur-md rounded-lg py-4 px-8 z-30"
    >
      <NavLayout
        varient
        navState={navState}
        inView={inView}
        onClick={() => handleScrollIntoView("Home")}
      >
        Home
      </NavLayout>
      <NavLayout
        navState={navState}
        inView={inView}
        onClick={() => handleScrollIntoView("About me")}
      >
        About me
      </NavLayout>
      <NavLayout
        navState={navState}
        inView={inView}
        onClick={() => handleScrollIntoView("Skills")}
      >
        Skills
      </NavLayout>
      <NavLayout
        navState={navState}
        inView={inView}
        onClick={() => handleScrollIntoView("Projects")}
      >
        Projects
      </NavLayout>
      <NavLayout
        navState={navState}
        inView={inView}
        onClick={() => handleScrollIntoView("Contact")}
      >
        Contact
      </NavLayout>
    </motion.ul>
  );
};
export default Nav;
