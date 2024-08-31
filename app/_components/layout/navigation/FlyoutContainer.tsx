"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navLinks, NavLink } from "@/data/navigation";
import ContactCard from "./NavContactCard";

interface FlyoutContainerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const FlyoutContainer = ({ isOpen, toggleMenu }: FlyoutContainerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-14 max-w-[900px] sm:w-[68vw] w-[60vw] h-64 bg-primary rounded-lg flex flex-col justify-around items-center text-center shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={listVariants}
            exit="hidden"
            transition={{ staggerChildren: 0.1, delay: 0.3 }}
            className="flex flex-col"
          >
            <motion.div className="grid grid-cols-6 gap-4 max-w-[800px] sm:w-[66vw] w-[58vw] m-4">
              {navLinks.map((link) => (
                <NavItem key={link.id} navLink={link} toggleMenu={toggleMenu} />
              ))}
            </motion.div>
            <div className="m-4 mt-0 overflow-hidden">
              <ContactCard />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

type NavItemProps = {
  navLink: NavLink;
  toggleMenu: () => void;
};

const NavItem = ({ navLink, toggleMenu }: NavItemProps) => {
  const Icon = navLink.icon;
  return (
    <motion.div
      variants={itemVariants}
      onClick={() => {
        if (typeof toggleMenu === "function") {
          toggleMenu(); // Ensure this function is correctly invoked
        } else {
          console.error("toggleMenu is not a function");
        }
      }}
      className="col-span-3 sm:col-span-2 rounded bg-secondary flex items-center font-semibold text-white text-2xs transition hover:bg-accent hover:scale-105 cursor-pointer active:bg-white active:text-primary active:scale-100"
    >
      <Link
        href={navLink.link}
        className="flex items-center w-full h-full px-2 sm:px-4 py-2 focus:shadow-lg"
      >
        <div className=" mr-2 sm:mr-4 p-1 rounded-full border cursor-pointer">
          <Icon />
        </div>
        <p className="text-xs font-semibold cursor-pointer">{navLink.text}</p>
      </Link>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { height: 0, width: 0 },
  visible: { height: "auto", width: "auto" },
  exit: { height: 0, width: 0, transition: { delay: 0.5 } },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default FlyoutContainer;
