// ui/animationVariants.ts

import { Variants } from "framer-motion";

export const backdropVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 0.8 },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const staggerChildrenVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Add more reusable variants as needed
