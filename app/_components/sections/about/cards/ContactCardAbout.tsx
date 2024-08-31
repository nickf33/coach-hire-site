import React from "react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

// Contact Icons
import { FaPhone } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

// Social Icons
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import MagneticWrap from "@/app/_components/ui/MagneticWrap";

const address = {
  lineOne: "Main Street",
  lineTwo: "Town Name",
  lineThree: "County",
  lineFour: "",
  postcode: "BN17 7AR",
};

const contactLinks = [
  { link: "tel:+447413977023", text: "+44 7413 977 023", icon: <FaPhone /> },
  {
    link: "mailto:info@exetercoachhire.co.uk",
    text: "info@exetercoachhire.co.uk",
    icon: <MdOutlineAlternateEmail />,
  },
];

const socialLinks = [
  { link: "https://google.com", icon: <FaFacebookF /> },
  { link: "https://google.com", icon: <FaTwitter /> },
  { link: "https://google.com", icon: <FaInstagram /> },
  { link: "https://google.com", icon: <FaWhatsapp /> },
];

const ContactCard = () => {
  return (
    <>
      <div className="relative flex flex-col justify-between w-full h-full pt-4 pb-6 px-4 bg-primary rounded-lg overflow-hidden">
        <div className="flex flex-col gap-5">
          <Logo />
          <Address />
        </div>
        <div className="flex flex-col justify-between gap-5">
          <ContactLinks />
          <SocialLinks />
        </div>
        {/* Circles */}
        <div className="absolute top-[-2.5rem] left-[-2.5rem] w-24 h-24 rounded-full shadow-lg bg-gradient-to-br from-light to-secondary opacity-40" />
        <div className="absolute bottom-[-3.5rem] right-[-4.5rem] w-44 h-44 rounded-full shadow-lg bg-gradient-to-br from-light to-secondary opacity-20" />
      </div>
    </>
  );
};

const Logo = () => {
  return (
    <>
      <Link href="/">
        <div className="flex items-center relative z-10 tablet:text-xl">
          <div className="text-lg p-2 rounded-full bg-white text-accent ">
            <FaLocationDot />
          </div>
          <p className="font-semibold text-white ml-2 tablet:text-xs">
            Exeter Coach Hire
          </p>
        </div>
      </Link>
    </>
  );
};

const Address = () => {
  return (
    <>
      <div className="">
        {Object.values(address)
          .filter((line) => line !== "")
          .map((line, idx) => (
            <p key={idx} className="text-white text-xs">
              {line},
            </p>
          ))}
      </div>
    </>
  );
};

const ContactLinks = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        {contactLinks.map((link, idx) => (
          <div key={idx} className="">
            <Link href={link.link}>
              <div className="flex items-center text-white text-2xs">
                <div className="mr-2">{link.icon}</div>
                <div className="tracking-wide">{link.text}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

const SocialLinks = () => {
  return (
    <>
      <div className="relative flex text-white w-full max-w-[10rem] justify-between z-10">
        {socialLinks.map((link, idx) => (
          <div key={idx} className="text-lg transition hover:text-secondary">
            <MagneticWrap>
              <Link href="/">
                <div className="">{link.icon}</div>
              </Link>
            </MagneticWrap>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactCard;
