"use client";

import React, { useState } from "react";
import phoneImg from "@/app/_assets/mockup/iphone_mockup.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";

const AppCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleKeyPress = (e: any) => {
    if (e.target.value === "enter") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <motion.div
        onClick={handleClick}
        onKeyDown={handleKeyPress}
        tabIndex={0}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="relative w-full h-full bg-primary text-white rounded-lg shadow transition hover:scale-[1.02] hover:shadow-lg cursor-pointer overflow-hidden"
      >
        <div className="relative w-full h-full z-10">
          <div className="relative m-6">
            <p className="text-lg font-semibold">Get Our App</p>
            <p className="text-xs mt-8 w-4/5">
              Download our web app for on the go use, and keep up to date with
              our latest news and offers
            </p>
            <div className="absolute top-0 right-0 h-8 w-8 rounded-full bg-accent grid place-content-center transition hover:bg-white hover:text-secondary active:scale-90 active:bg-secondary active:border active:text-white">
              <IoMdDownload />
            </div>
          </div>
          <motion.div variants={variants} className="">
            <Image
              src={phoneImg}
              alt="mobile mockup"
              width={300}
              height={300}
              className="mx-auto relative top-10 h-auto w-64"
            />
          </motion.div>
        </div>
        <div className="absolute top-[-2.5rem] left-[-2.5rem] w-24 h-24 rounded-full shadow-lg bg-gradient-to-br from-light to-secondary opacity-40" />
        <div className="absolute bottom-[-3.5rem] right-[-4.5rem] w-44 h-44 rounded-full shadow-lg bg-gradient-to-br from-light to-secondary opacity-20" />
      </motion.div>
    </>
  );
};

export default AppCard;

const variants = {
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
    y: -10,
    transition: {
      stiffness: 10,
      damping: 100,
    },
  },
};
