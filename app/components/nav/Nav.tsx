"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { useMediaQuery } from "usehooks-ts";
import { ArmIcon, MailIcon, PersonIcon } from "../Icons";
import getAllIntersector from "./getAllIntersector";
import MotionSection from "./MotionSection";

const Nav = () => {
  const [state, setState] = useState(false);
  const [zIndex, setZIndex] = useState(true);

  const divRef = useRef<HTMLDivElement>(null);
  const matches = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    setState(true);

    const timerId = setTimeout(() => {
      setState(false);
    }, 1200);

    return () => {
      setState(false);

      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    if (state) return;

    if (matches) {
      setState(true);
      setZIndex(true);
      return;
    }

    const handleTimeOut = () => {
      setZIndex(false);
    };
    const timerId = setTimeout(handleTimeOut, 100);
    return () => {
      clearTimeout(timerId);
    };
  }, [state, matches]);

  const currentSection = getAllIntersector();

  return (
    <nav>
      <motion.div
        onClick={() => {
          if (matches) return;
          setState(false);
        }}
        initial={{ backgroundColor: "rgb(0 0 0 / 0.2)" }}
        animate={{
          backgroundColor: state ? "rgb(0 0 0 / 0.2)" : "rgb(0 0 0 / 0)",
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`flex items-center fixed max-lg:inset-0 lg:top-0 lg:bottom-0 ${
          zIndex ? " z-20 backdrop-blur-sm " : " -z-20 backdrop-blur-0"
        } duration-100 `}
      >
        <div
          ref={divRef}
          className={`stroke-white fill-white fixed top-28 bottom-20 pl-10 flex flex-col justify-between
        ${state ? " left-0 " : " -left-24 "}
         duration-300 lg:left-0`}
        >
          <MotionSection
            name={currentSection === "Introduction" ? currentSection : ""}
            section="/#introduction"
            duration={0.7}
            state={state}
          >
            <PersonIcon />
          </MotionSection>
          <MotionSection
            name={currentSection === "Skills" ? currentSection : ""}
            section="/#skills"
            duration={0.6}
            state={state}
          >
            <ArmIcon />
          </MotionSection>
          <MotionSection
            name={currentSection === "Projects" ? currentSection : ""}
            section="/#projects"
            duration={0.5}
            state={state}
          >
            <TbWorld className="text-white size-8" />
          </MotionSection>
          <MotionSection
            name={currentSection === "Contact" ? currentSection : ""}
            section="/#contact"
            duration={0.4}
            state={state}
          >
            <MailIcon />
          </MotionSection>
        </div>
      </motion.div>
      <span
        className={`fixed bottom-40 lg:hidden cursor-pointer z-10 ${
          state ? " left-5 " : " left-1 rotate-90 "
        } duration-500`}
        onClick={() => {
          if (matches) return;
          setState(true);
          setZIndex(true);
        }}
      >
        <FaChevronUp className="size-5 text-white" />
      </span>
    </nav>
  );
};

export default Nav;
