"use client";

import { motion } from "framer-motion";
import React from "react";

export default function ThreeDotsWave() {
  const LoadingDot = "w-2 h-2 bg-primary rounded-full";
  const LoadingContainer = "w-20 h-20 flex justify-around";

  const ContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const DotVariants = {
    initial: {
      y: "0%",
    },
    animate: {
      y: "100%",
    },
  };

  const DotTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="pt-20 w-full h-screen flex items-center justify-center">
      <motion.div
        className={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          className={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          className={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  );
}
