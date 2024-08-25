"use client";

import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

const AnimatedBurgerBtn = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={toggleMenu}
        className="relative h-10 w-6 rounded-full"
      >
        <motion.span
          variants={variants.top}
          className="absolute h-0.5 w-6 bg-white rounded-full"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={variants.middle}
          className="absolute h-0.5 w-6 bg-white rounded-full"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={variants.bottom}
          className="absolute h-0.5 w-6 bg-white rounded-full"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default AnimatedBurgerBtn;

const variants = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "50%",
    },
  },
};
