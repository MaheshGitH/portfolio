import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  navState: boolean;
  setNavState: () => void;
}

type InViewItem =
  | "topsection"
  | "aboutme"
  | "skillsection"
  | "projectsection"
  | "contactsection"
  | null;

const Nav = ({ navState, setNavState }: Props) => {
  const [inView, setInView] = useState<InViewItem>(null);
  const handleScrollIntoView = (id: string) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setNavState();
  };

  useEffect(() => {
    const sections = [
      { id: "topsection", threshold: 0 },
      { id: "aboutme", threshold: 0.3 },
      { id: "skillsection", threshold: 0.3 },
      { id: "projectsection", threshold: 0.2 },
      { id: "contactsection", threshold: 0.3 },
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
      className="flex flex-col gap-8 absolute top-8 right-5 text-nowrap  translate-x-0 bg-white/5 border border-secondary backdrop-blur-sm rounded-lg py-4 px-8 z-30"
    >
      <li
        className={` ${
          navState ? "text-black dark:text-white" : "text-white/5"
        } duration-200 relative`}
      >
        <button onClick={() => handleScrollIntoView("topsection")}>Home</button>
        <span
          className={`absolute h-0.5 bg-secondary -bottom-1  ${
            inView === "topsection" && navState
              ? " left-0 right-0"
              : "  left-1/2 right-1/2"
          } duration-200`}
        />
      </li>
      <li
        className={` ${
          navState
            ? " mt-0 text-black dark:text-white "
            : " -mt-14 text-white/5 "
        } duration-200 relative`}
      >
        <button onClick={() => handleScrollIntoView("aboutme")}>
          About me
        </button>
        <span
          className={`absolute h-0.5 bg-secondary -bottom-1  ${
            inView === "aboutme" && navState
              ? " left-0 right-0"
              : "  left-1/2 right-1/2"
          } duration-200`}
        />
      </li>
      <li
        className={`${
          navState
            ? " mt-0 text-black dark:text-white "
            : " -mt-14 text-white/5 "
        } duration-200 relative`}
      >
        <button onClick={() => handleScrollIntoView("skillsection")}>
          Skills
        </button>
        <span
          className={`absolute h-0.5 bg-secondary -bottom-1  ${
            inView === "skillsection" && navState
              ? " left-0 right-0"
              : "  left-1/2 right-1/2"
          } duration-200`}
        />
      </li>
      <li
        className={`${
          navState
            ? " mt-0 text-black dark:text-white "
            : " -mt-14 text-white/5 "
        } duration-200 relative`}
      >
        <button onClick={() => handleScrollIntoView("projectsection")}>
          Projects
        </button>
        <span
          className={`absolute h-0.5 bg-secondary -bottom-1  ${
            inView === "projectsection" && navState
              ? " left-0 right-0"
              : "  left-1/2 right-1/2"
          } duration-200`}
        />
      </li>
      <li
        className={`${
          navState
            ? " mt-0 text-black dark:text-white "
            : " -mt-14 text-white/5 "
        } duration-200 relative group`}
      >
        <button onClick={() => handleScrollIntoView("contactsection")}>
          Contact
        </button>
        <span
          className={`absolute h-0.5 bg-secondary -bottom-1 group-hover:bg-secondary/35 group-hover:left-0 group-hover:right-0  ${
            inView === "contactsection" && navState
              ? " left-0 right-0"
              : "  left-1/2 right-1/2"
          } duration-200`}
        />
      </li>
    </motion.ul>
  );
};
export default Nav;
