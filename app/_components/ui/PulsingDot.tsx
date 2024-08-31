import React from "react";
import { motion } from "framer-motion";

const PulsingDot = ({
  position,
  size,
  delay,
}: {
  position?: string;
  size?: string;
  delay?: number;
}) => {
  return (
    <div className={`container ${position} `}>
      <div className={`dot bg-accent ${size} rounded-full`} />
      <motion.div
        className={`dot-pulse absolute top-0 left-0 bg-accentDark ${size} rounded-full`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0], scale: [1, 1.5] }}
        transition={{
          repeat: Infinity,
          delay: delay || 0,
          repeatDelay: delay || 1,
          duration: 1,
          ease: "easeIn",
        }}
      />
    </div>
  );
};

export default PulsingDot;
