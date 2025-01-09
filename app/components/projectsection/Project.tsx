"use client";

import React, { useRef } from "react";
import ProjectSummary from "./ProjectSummary";
import CustomImage from "./CustomImage";
import type { Project } from "./types";
import { motion, useInView } from "framer-motion";

const Project = ({ name, description, link, image, left }: Project) => {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      initial={{
        marginTop: 120,
        opacity: 0,
      }}
      animate={{ marginTop: isInView ? 0 : 120, opacity: isInView ? 1 : 0 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
      ref={divRef}
      className={`flex flex-col gap-32 xl:gap-64 ${
        left ? " xl:flex-row " : " xl:flex-row-reverse "
      }`}
    >
      <ProjectSummary name={name} description={description} link={link} />
      <CustomImage src={image} />
    </motion.div>
  );
};

export default Project;
