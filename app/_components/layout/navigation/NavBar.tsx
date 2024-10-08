"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import MenuWrap from "./MenuWrap";
import { backdropVariants } from "../../ui/AnimationVariants";
import Logo from "../shared/Logo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  const handleScroll = useCallback(
    (latest: number) => {
      const previous = scrollY.getPrevious();
      if (previous !== undefined && latest > previous && latest > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    },
    [scrollY]
  );

  useMotionValueEvent(scrollY, "change", handleScroll);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isHidden) setIsOpen(false);
  }, [isHidden]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            tabIndex={0}
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="exit"
            onClick={toggleMenu}
            className="fixed top-0 left-0 w-screen h-screen z-20 bg-light"
          />
        )}
      </AnimatePresence>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35 }}
        className="fixed top-0 w-full pt-4 z-[999]"
      >
        <nav className="relative max-w-[1080px] w-4/5 rounded-full bg-secondary mx-auto flex justify-between items-center px-6 shadow-lg h-12 z-[999]">
          <Logo />
          <MenuWrap isOpen={isOpen} toggleMenu={toggleMenu} />
        </nav>
      </motion.header>
    </>
  );
};

export default NavBar;
