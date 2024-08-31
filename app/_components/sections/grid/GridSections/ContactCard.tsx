import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MagneticWrap from "../../../ui/MagneticWrap";
import {
  contactLinks,
  socialLinks,
  ContactLink,
  SocialLink,
} from "@/data/navigation";
import { fadeInUpVariants } from "../../../ui/AnimationVariants";

interface CardProps {
  background?: string;
  hideText?: boolean;
}

const ContactCard = ({ background, hideText = false }: CardProps) => (
  <div
    className={`relative col-span-6 rounded-lg w-full h-full p-6 shadow transition hover:scale-[1.02] hover:shadow-lg  ${
      background ? background : "bg-gradient-to-br from-accent to-accentDark"
    } grid grid-cols-1 lg:grid-cols-2 p-4 overflow-hidden gap-5`}
  >
    <ContactInfo hideText={hideText} />
    <SocialLinks />
    <BackgroundCircles />
  </div>
);

const ContactInfo = ({ hideText }: { hideText: boolean }) => (
  <div className="h-full relative col-span-1 flex flex-col justify-between text-white mb-2 z-10">
    <div className="">
      <p className="title__md text-white mb-2">Speak with our team today!</p>
      <p
        className={`para text-white max-w-[18rem] ${hideText ? "hidden" : ""}`}
      >
        Prefer a personal touch? Reach out directly using the details below.
      </p>
    </div>
    <div className="">
      {contactLinks.map((item: ContactLink, index: number) => (
        <div
          key={index}
          className="flex items-center sm:text-xs text-2xs font-normal mt-3 hover:underline cursor-pointer"
        >
          <div className="mr-2 sm:text-sm text-xs">
            <item.icon />
          </div>
          <p className="text-sm tracking-wides">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
);

const SocialLinks = () => (
  <div className="relative col-span-2 sm:col-span-1 sm:flex items-end justify-start lg:justify-end hidden text-white z-10">
    <div className="flex w-full max-w-44 justify-between items-center">
      {socialLinks.map((item: SocialLink, index: number) => (
        <MagneticWrap key={index}>
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg transition hover:text-primary cursor-pointer"
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
      className={`absolute top-[-2.5rem] right-[-2.5rem] w-24 h-24 rounded-full shadow-lg bg-gradient-to-br from-[#d9d9d9] to-gray-200 opacity-20`}
    />
    <div
      className={`absolute bottom-[-3.5rem] left-[-4.5rem] w-44 h-44 rounded-full shadow-lg bg-gradient-to-br from-[#d9d9d9] to-gray-400 opacity-20`}
    />
  </>
);

export default ContactCard;
