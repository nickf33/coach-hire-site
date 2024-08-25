"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MagneticWrap from "../../ui/MagneticWrap";
import {
  navLinks,
  contactLinks,
  socialLinks,
  NavLink,
  ContactLink,
  SocialLink,
} from "@/data/navigation";

interface FlyoutContainerProps {
  isOpen: boolean;
}

const FlyoutContainer = ({ isOpen }: FlyoutContainerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-14 max-w-[900px] w-[60vw] h-64 bg-primary rounded-lg flex flex-col justify-around items-center text-center shadow-lg"
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
            transition={{ staggerChildren: 0.15, delay: 0.3 }}
            className="flex flex-col"
          >
            <motion.div className="grid grid-cols-6 gap-5 max-w-[800px] w-[56vw] m-6">
              {navLinks.map((link) => (
                <NavItem key={link.id} navLink={link} />
              ))}
              <ContactSection />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

type NavItemProps = {
  navLink: NavLink;
};

const NavItem = ({ navLink }: NavItemProps) => {
  const Icon = navLink.icon;
  return (
    <motion.div
      variants={itemVariants}
      className="col-span-3 sm:col-span-2 rounded bg-secondary flex items-center text-white text-2xs transition hover:bg-accent hover:scale-105 cursor-pointer active:bg-white active:text-primary active:scale-100"
    >
      <Link
        href={navLink.link}
        className="flex w-full h-full px-2 sm:px-4 py-2 focus:shadow-lg"
      >
        <div className="mr-2 p-1 rounded-full border cursor-pointer">
          <Icon />
        </div>
        <p className="text-xs font-semibold cursor-pointer">{navLink.text}</p>
      </Link>
    </motion.div>
  );
};

const ContactSection = () => (
  <motion.div
    variants={itemVariants}
    className="relative col-span-6 rounded w-full bg-secondary grid grid-cols-1 p-4 overflow-hidden"
  >
    <SocialLinks />
    <BackgroundCircles />
  </motion.div>
);

const ContactInfo = () => (
  <div className="relative col-span-1 flex flex-col justify-between text-white tablet:col-span-2 z-10">
    <p className="inline-block text-left font-semibold text-sm mb-4">
      Get In touch!
    </p>
    {contactLinks.map((item: ContactLink, index: number) => (
      <div
        key={index}
        className="flex items-center text-2xs font-normal my-1 hover:underline cursor-pointer"
      >
        <div className="mr-2">
          <item.icon />
        </div>
        <p className="text-sm tracking-wides">{item.text}</p>
      </div>
    ))}
  </div>
);

const SocialLinks = () => (
  <div className="relative col-span-2 sm:col-span-1 flex items-start sm:items-end text-white z-10">
    <div className="flex w-full max-w-44 justify-between items-center">
      {socialLinks.map((item: SocialLink, index: number) => (
        <MagneticWrap key={index}>
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg transition hover:text-accent cursor-pointer"
          >
            <item.icon />
          </Link>
        </MagneticWrap>
      ))}
    </div>
  </div>
);

const BackgroundCircles = () => (
  <>
    <div className="absolute top-[-2.5rem] left-[-2.5rem] w-24 h-24 rounded-full shadow-lg bg-gradient-to-br from-[#d9d9d9] to-primary opacity-40" />
    <div className="absolute bottom-[-3.5rem] right-[-4.5rem] w-44 h-44 rounded-full shadow-lg bg-gradient-to-br from-[#d9d9d9] to-primary opacity-20" />
  </>
);

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
