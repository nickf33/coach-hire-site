import React from "react";
import Link from "next/link";
import Logo from "../shared/Logo";
import { motion } from "framer-motion";
import { fadeInVariants } from "../../ui/AnimationVariants";
import ContactCard from "../../sections/grid/GridSections/ContactCard";
import { navLinks, NavLink, address, AddressProps } from "@/data/navigation";

const FooterGrid = () => {
  return (
    <div className="w-full h-full bg-primary p-4 rounded-lg">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-10 md:grid-rows-5 grid-rows-4">
        <div className="col-span-1 md:col-span-3 md:row-span-5 row-span-4">
          <div className="h-full hidden md:block">
            <LogoWrap />
          </div>
          <div className="p-4 rounded bg-secondary md:hidden block">
            <Logo />
          </div>
        </div>
        <div className="col-span-1 md:col-span-7 md:row-span-2 md:col-start-4">
          <NavItemsWrap navLinks={navLinks} />
        </div>
        <div className="col-span-1 md:col-span-7 md:row-span-3 md:col-start-4 md:row-start-3">
          <ContactCard hideText={true} />
        </div>
      </div>
    </div>
  );
};

const LogoWrap = () => {
  return (
    <>
      <div className="h-full relative grid grid-cols-1 grid-rows-4 gap-4 p-4 bg-secondary rounded overflow-hidden">
        <div>
          <Logo />
        </div>
        <div className="row-span-3">
          <AddressWrap address={address} />
        </div>
        <BackgroundCircles />
      </div>
    </>
  );
};

interface AddressWrapProps {
  address: AddressProps;
}

const AddressWrap = ({ address }: AddressWrapProps) => {
  return (
    <>
      <div className="relative text-white h-full pt-4 flex items-end overflow-hidden">
        <div className="text-sm">
          <p className="">{address.lineOne}</p>
          <p className="">{address.lineTwo}</p>
          <p className="">{address.lineThree}</p>
          <p className="">{address.lineFour}</p>
          <p className="">{address.postcode}</p>
        </div>
      </div>
    </>
  );
};

const BackgroundCircles = () => (
  <>
    <div
      className={`absolute top-[-2.5rem] right-[-2.5rem] w-24 h-24 rounded-full shadow-lg bg-gradient-to-br from-[#d9d9d9] to-gray-200 opacity-10`}
    />
    <div
      className={`absolute bottom-[-3.5rem] left-[-4.5rem] w-44 h-44 rounded-full shadow-lg bg-gradient-to-br from-[#d9d9d9] to-gray-400 opacity-10`}
    />
  </>
);

interface NavItemsWrapProps {
  navLinks: NavLink[];
}

const NavItemsWrap = ({ navLinks }: NavItemsWrapProps) => {
  return (
    <>
      <div className="w-full h-full grid lg:grid-cols-3 grid-cols-2 gap-4">
        {navLinks.map((link) => (
          <NavItem key={link.id} navLink={link} />
        ))}
      </div>
    </>
  );
};

type NavItemProps = {
  navLink: NavLink;
};

const NavItem = ({ navLink }: NavItemProps) => {
  const Icon = navLink.icon;
  return (
    <motion.div
      variants={fadeInVariants}
      className="rounded bg-secondary flex items-center text-white text-2sm transition hover:bg-accent hover:scale-105 cursor-pointer active:bg-white active:text-primary active:scale-100"
    >
      <Link
        href={navLink.link}
        className="flex items-center w-full h-full px-2 md:px-4 py-2 focus:shadow-lg"
      >
        <div className=" mr-2 md:mr-4 p-1 rounded-full border cursor-pointer">
          <Icon />
        </div>
        <p className="text-sm font-semibold cursor-pointer">{navLink.text}</p>
      </Link>
    </motion.div>
  );
};

export default FooterGrid;
