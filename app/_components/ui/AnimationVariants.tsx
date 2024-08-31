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

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 10,
      damping: 10,
    },
  },
};

export const staggerChildrenVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const scaleUpVariants = {
  rest: {
    scale: 0.95,
    y: 0,
    transition: {
      stiffness: 10,
      damping: 10,
    },
  },
  hover: {
    scale: 1,
    y: "-10%",
    transition: {
      stiffness: 10,
      damping: 100,
    },
  },
};

export const scaleDownVariant = {
  hidden: { scale: 0.75, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
  },
};
// Add more reusable variants as needed
