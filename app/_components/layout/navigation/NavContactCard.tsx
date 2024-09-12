import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MagneticWrap from "../../ui/MagneticWrap";
import {
  contactLinks,
  socialLinks,
  ContactLink,
  SocialLink,
} from "@/data/navigation";
import { fadeInUpVariants } from "../../ui/AnimationVariants";

interface CardProps {
  background?: string;
}

const NavContactCard = ({ background }: CardProps) => (
  <motion.div
    variants={fadeInUpVariants}
    className={`relative col-span-6 rounded w-full h-full p-4 ${
      background ? background : "bg-secondary"
    } grid grid-cols-1 md:grid-cols-2 p-4 overflow-hidden`}
  >
    <ContactInfo />
    <SocialLinks />
    <BackgroundCircles />
  </motion.div>
);

const ContactInfo = () => (
  <div className="relative col-span-1 flex flex-col justify-between text-white z-10">
    <p className="inline-block text-left font-semibold sm:text-lg text-sm mb-2">
      Contact Us!
    </p>
    <div className="">
      {contactLinks.map((item: ContactLink, index: number) => (
        <div
          key={index}
          className="flex items-center text-sm font-normal mt-4 hover:underline cursor-pointer"
        >
          <div className="mr-2">
            <item.icon />
          </div>
          <p className="sm:text-sm text-xs tracking-wides">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
);

const SocialLinks = () => (
  <div className="relative col-span-2 sm:col-span-1 flex items-end justify-start md:justify-end text-white z-10">
    <div className="flex w-full max-w-44 justify-between items-center mt-8">
      {socialLinks.map((item: SocialLink, index: number) => (
        <MagneticWrap key={index}>
          <Link
            aria-label={item.label}
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
    <div
      className={`absolute top-[-2.5rem] left-[-2.5rem] w-24 h-24 rounded-full shadow-lg bg-gradient-to-br from-[#d9d9d9] to-gray-200 opacity-20`}
    />
    <div
      className={`absolute bottom-[-3.5rem] right-[-4.5rem] w-44 h-44 rounded-full shadow-lg bg-gradient-to-br from-[#d9d9d9] to-gray-400 opacity-20`}
    />
  </>
);

export default NavContactCard;
