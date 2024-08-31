"use client";

import { heroContent } from "@/data/content";
import { motion } from "framer-motion";
import backgroundImg from "@/app/_assets/images/city-map-bg.png";
import Image from "next/image";
import MagneticWrap from "../../ui/MagneticWrap";
import SplitText from "../../ui/SplitText";
import { FaLocationDot } from "react-icons/fa6";
import { fadeInUpVariants, fadeInVariants } from "../../ui/AnimationVariants";
import BookingFormWrap from "./bookingForm/BookingFormWrap";

const { title, heading, subHeading } = heroContent;

const HeroWrap = () => {
  return (
    <>
      <div
        tabIndex={0}
        className="relative h-screen max-h-[50rem] w-full overflow-hidden"
      >
        <Background />
        <TextContainer />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, stiffness: 10, damping: 10 }}
        className="relative top-[-35%] sm:w-4/5 w-9/10 mx-auto"
      >
        <BookingFormWrap />
      </motion.div>
    </>
  );
};

const Background = () => {
  return (
    <>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1, stiffness: 10, damping: 10 }}
        className="absolute w-full h-screen z-0 overflow-hidden"
      >
        <Image
          src={backgroundImg}
          alt="city map vextor with a white overlay"
          width={1920}
          height={1080}
          className="w-full h-screen object-cover"
        />
        <div className="absolute bottom-0 w-full h-[12rem] bg-gradient-to-t from-white via-white to-transparent" />

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8, stiffness: 10, damping: 10 }}
          className="sm:block absolute bottom-96 left-[10%] text-accent text-4xl z-50 hidden"
        >
          <FaLocationDot />
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9, stiffness: 1000, damping: 10 }}
          className="sm:block absolute top-32 right-[25%] text-accent text-3xl z-[99] hidden"
        >
          <FaLocationDot />
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, stiffness: 1000, damping: 10 }}
          className="sm:block absolute bottom-52 right-[10%] text-accent text-4xl z-50 hidden"
        >
          <FaLocationDot />
        </motion.div>
      </motion.div>
    </>
  );
};

const TextContainer = () => {
  return (
    <div className="relative w-4/5 flex flex-col items-center text-center max-w-[34rem] z-1 mx-auto pt-40">
      <motion.p
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6, stiffness: 10, damping: 10 }}
        className="text-xs text-accent mt-4"
      >
        {title}
      </motion.p>
      <div className="sm:max-w-[32rem] w-9/10">
        <SplitText classes="title__xl">{heading}</SplitText>
      </div>
      <motion.p
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8, stiffness: 10, damping: 10 }}
        className="para max-w-[15rem] mt-6"
      >
        {subHeading}
      </motion.p>
    </div>
  );
};

export default HeroWrap;
