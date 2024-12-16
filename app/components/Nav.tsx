import { motion } from "framer-motion";

interface Props {
  navState: boolean;
  setNavState: () => void;
}
const Nav = ({ navState, setNavState }: Props) => {
  const handleScrollIntoView = (id: string) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setNavState();
  };
  return (
    <motion.ul
      animate={{ opacity: navState ? 1 : 0, scale: navState ? 1 : 0.95 }}
      initial={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.3,
      }}
      style={{ pointerEvents: navState ? "auto" : "none" }}
      className="flex flex-col gap-8 absolute top-8 right-5 text-nowrap bg-white/5 border border-secondary backdrop-blur-sm rounded-lg py-4 px-8 z-10"
    >
      <li
        className={`${navState ? "text-white " : "text-white/5 "} duration-200`}
      >
        <button onClick={() => handleScrollIntoView("topsection")}>Home</button>
      </li>
      <li
        className={`${
          navState ? " mt-0 text-white " : " -mt-14 text-white/5 "
        } duration-200`}
      >
        <button onClick={() => handleScrollIntoView("aboutme")}>
          About me
        </button>
      </li>
      <li
        className={`${
          navState ? " mt-0 text-white " : " -mt-14 text-white/5 "
        } duration-200`}
      >
        <button onClick={() => handleScrollIntoView("skillsection")}>
          Skills
        </button>
      </li>
      <li
        className={`${
          navState ? " mt-0 text-white " : " -mt-14 text-white/5 "
        } duration-200`}
      >
        <button onClick={() => handleScrollIntoView("projectsection")}>
          Projects
        </button>
      </li>
      <li
        className={`${
          navState ? " mt-0 text-white " : " -mt-14 text-white/5 "
        } duration-200`}
      >
        <button onClick={() => handleScrollIntoView("contactsection")}>
          Contact
        </button>
      </li>
    </motion.ul>
  );
};

export default Nav;
