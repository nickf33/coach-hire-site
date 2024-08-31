import React, { useRef, useEffect } from "react";
import SplitText from "../../ui/SplitText";
import FadeText from "../../ui/FadeText";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import mainImg from "@/app/_assets/images/driving.jpeg";
import aboutData from "./aboutData";
import ContactCardAbout from "@/app/_components/sections/about/cards/ContactCardAbout";
import AppCard from "@/app/_components/.old/grid/gridItems/GetTheApp";
import "./about.css";

const { title, heading, paragraph, stats } = aboutData;

const AboutWrap = () => {
  // Create a ref for the container
  const aboutRef = useRef(null);

  // Determine if the container is in view
  const isInView = useInView(aboutRef, { once: true });

  return (
    <>
      <section
        id="about"
        ref={aboutRef}
        tabIndex={0}
        className="w-4/5 max-w-custom mx-auto grid grid-cols-2 tablet:grid-cols-1"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ stiffness: 100, damping: 12 }}
          className="relative w-9/10 max-w-[400px] tablet:max-w-full tablet:max-h-[18rem] max-h-[22rem] laptop:max-h-[24rem] rounded-lg overflow-hidden tablet:hidden"
        >
          <Image
            src={mainImg}
            alt="image"
            width={1000}
            height={1000}
            className="h-full object-cover"
          />
        </motion.div>
        <div className="w-full py-4 tablet:pb-20">
          <Text isInView={isInView} />
          <StatsGrid isInView={isInView} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ stiffness: 100, damping: 12 }}
          className="relative w-full tablet:max-h-[18rem] max-h-[22rem] laptop:max-h-[24rem] rounded-lg overflow-hidden hidden tablet:block"
        >
          <AppCard />
        </motion.div>
      </section>
    </>
  );
};

const Text = ({ isInView }: { isInView: boolean }) => {
  return (
    <>
      <SplitText
        text={heading}
        classes="max-w-[22rem] tablet:max-w-[22rem] tablet:text-center tablet:mx-auto"
        isInView={isInView}
        delay={1}
      />
      <FadeText
        text={paragraph}
        classes="max-w-[22rem] my-[1rem] tablet:max-w-9/10 tablet:text-center tablet:mx-auto"
        isInView={isInView}
      />
    </>
  );
};

const StatsGrid = ({ isInView }: { isInView: boolean }) => {
  return (
    <>
      <AnimatePresence>
        <div className="grid grid-cols-2 gap-4 pt-4 ml-auto tablet:ml-0 tablet:grid-cols-4 tablet:w-full">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="hidden"
              variants={staggerVariants}
              className=""
            >
              <StatCard
                key={index}
                value={stat.value}
                title={stat.title}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </>
  );
};

//Animation variants for Stats Grid
const staggerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2 + 0.8,
    },
  }),
};

const StatCard = ({
  value,
  title,
  index,
}: {
  value: string;
  title: string;
  index: number;
}) => {
  return (
    <>
      <div
        className={`${index % 2 === 0 ? "border-r" : "tablet:border-r"} ${
          index === 3 ? "tablet:border-none" : ""
        } tablet:grid tablet:place-content-center tablet:w-full w-9/10`}
      >
        <p className="font-semibold text-xl">{value}</p>
        <p className="text-2xs">{title}</p>
      </div>
    </>
  );
};

export default AboutWrap;
