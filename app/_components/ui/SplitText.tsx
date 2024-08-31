"use client";

import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
  }),
};

const textVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      damping: 12,
      stiffness: 100,
    },
  },
};

interface SplitTextProps {
  children: React.ReactNode;
  classes?: string;
}

const SplitText = ({ children, classes = "" }: SplitTextProps) => {
  const content = React.Children.toArray(children);

  const animatedContent = content.map((child, index) => {
    if (typeof child === "string") {
      return child.split(" ").map((word, wordIndex) => (
        <React.Fragment key={`${index}-${wordIndex}`}>
          <motion.span variants={textVariant} className="inline-block">
            {word}
          </motion.span>{" "}
        </React.Fragment>
      ));
    } else {
      return (
        <motion.span
          key={index}
          variants={textVariant}
          className="inline-block"
        >
          {child}
        </motion.span>
      );
    }
  });

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={`${classes}`}
    >
      {animatedContent}
    </motion.div>
  );
};

export default SplitText;
