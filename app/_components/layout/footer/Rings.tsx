import React from "react";
import { motion } from "framer-motion";
import PulsingDot from "../../ui/PulsingDot";
import {
  staggerChildrenVariants,
  scaleDownVariant,
} from "../../ui/AnimationVariants";

const Rings = ({ footerInView }: { footerInView: boolean }) => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate={footerInView ? "visible" : "hidden"}
        variants={staggerChildrenVariants}
        className="relative flex justify-center w-full md:h-[24rem] overflow-hidden t-20 h-[50vw]"
      >
        <motion.div
          variants={scaleDownVariant}
          className="absolute md:top-[10.5rem] border-2 border-[#EBEBEB] rounded-full md:h-[19rem] md:w-[19rem] grid place-content-center opacity-100 h-[35vw] w-[35vw] top-[22.5vw]"
        >
          <PulsingDot
            position="absolute md:top-[13.5%] left-[10%] z-50 sm:top-[1.75rem] top-[2vw] sm:block hidden"
            size="h-4 w-4"
            delay={1.75}
          />
        </motion.div>
        <motion.div
          variants={scaleDownVariant}
          className="absolute md:top-[7rem] border-2 border-[#C4C4C4] rounded-full md:h-[26rem] md:w-[26rem] grid place-content-center opacity-100 h-[50vw] w-[50vw] top-[15vw]"
        >
          <PulsingDot
            position="absolute md:top-[10%] left-[98.5%] z-50 sm:top-[1.25rem] top-[3vw] sm:block hidden"
            size="h-6 w-6"
            delay={2.5}
          />
        </motion.div>
        <motion.div
          variants={scaleDownVariant}
          className="absolute md:top-[3.5rem] border-2 border-[#9D9D9D] rounded-full md:h-[33rem] md:w-[33rem] grid place-content-center opacity-100 h-[65vw] w-[65vw] top-[7.5vw]"
        />
        <motion.div
          variants={scaleDownVariant}
          className="absolute top-0 border-2 border-[#767676] rounded-full md:h-[40rem] md:w-[40rem] grid place-content-center opacity-100 h-[80vw] w-[80vw]"
        >
          <PulsingDot
            position="absolute md:top-[12%] left-[13%] z-50 top-[4rem] top-[2vw] sm:block hidden"
            size="h-6 w-6"
          />
        </motion.div>
        <div className="absolute bottom-[-4rem] left-0 w-full h-64 bg-gradient-to-t from-white via-white to-transparent z-10"></div>
      </motion.div>
    </>
  );
};

export default Rings;
