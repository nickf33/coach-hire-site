"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  staggerChildrenVariants,
  fadeInUpVariants,
} from "../../ui/AnimationVariants";
import SplitText from "../../ui/SplitText";
import AppCard from "./GridSections/AppCard";
import ContactCard from "./GridSections/ContactCard";
import ModalCard from "./GridSections/ModalCard";

const GridWrap = () => {
  return (
    <section tabIndex={0} className="w-4/5 max-w-container mx-auto">
      <SplitText classes="title__lg max-w-[34rem] mb-20 ml-5">
        Here at Exeter Coach Hire, we get you from point A to B with comfort and
        ease
      </SplitText>

      {/* Parent Wrapper */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerChildrenVariants}
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-10 gap-5 md:h-[34rem] h-[54rem] sm:grid-rows-6 grid-rows-8"
      >
        {/* Full height */}
        <motion.div
          variants={fadeInUpVariants}
          className="md:col-span-4 md:row-span-6 sm:col-span-10 sm:row-span-2 sm:row-start-5 row-start-7 col-span-10 row-span-2"
        >
          <AppCard />
        </motion.div>

        {/* Long top right */}
        <motion.div
          variants={fadeInUpVariants}
          className="md:col-span-6 md:row-span-3 md:col-start-5 sm:col-span-10 sm:row-span-2 col-span-10 row-span-2 row-start-1"
        >
          <ContactCard />
        </motion.div>

        {/* Small Left */}
        <motion.div
          variants={fadeInUpVariants}
          className="md:col-span-3 md:row-span-3 md:col-start-5 md:row-start-4 sm:col-span-5 sm:row-span-2 sm:row-start-3 col-span-10 row-span-2 row-start-5"
        >
          <ModalCard
            isServices={false}
            cardTitle="Vehicles"
            cardText="This will be the text for the vehicle card. It will need to be replaced soon"
            overlayColor="bg-gradient-to-br from-gray-200 to-gray-300"
          />
        </motion.div>

        {/* Small Right */}
        <motion.div
          variants={fadeInUpVariants}
          className="md:col-span-3 md:row-span-3 md:col-start-8 md:row-start-4 sm:col-span-5 sm:row-span-2 sm:row-start-3 sm:col-start-6 col-span-10 row-span-2 row-start-3"
        >
          <ModalCard
            isServices={true}
            cardTitle="Services"
            cardText="This will be the text for the services card. It will need to be replaced soon"
            overlayColor="bg-gradient-to-br from-primary to-secondary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GridWrap;
