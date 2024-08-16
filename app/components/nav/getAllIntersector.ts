import { useEffect, useState } from "react";

const getAllIntersector = () => {
  const [currentSection, setCurrentSection] = useState("");
  useEffect(() => {
    const introduction = document.querySelector("#introduction");
    const skill = document.querySelector("#skills");
    const project = document.querySelector("#projects");
    const contact = document.querySelector("#contact");

    const introHandler = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection("Introduction");
        }
      });
    };
    const skillHandler = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrentSection("Skills");
      });
    };
    const projectHandler = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrentSection("Projects");
      });
    };
    const contactHandler = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrentSection("Contact");
      });
    };

    const introObserver = new IntersectionObserver(introHandler, {
      threshold: 0.5,
    });
    const skillsObserver = new IntersectionObserver(skillHandler, {
      threshold: 0.5,
    });
    const projectObserver = new IntersectionObserver(projectHandler, {
      threshold: 0.1,
    });
    const contactObserver = new IntersectionObserver(contactHandler, {
      threshold: 0.2,
    });

    introObserver.observe(introduction);
    skillsObserver.observe(skill);
    projectObserver.observe(project);
    contactObserver.observe(contact);

    return () => {
      introObserver.disconnect();
      skillsObserver.disconnect();
      projectObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  return currentSection;
};

export default getAllIntersector;
