"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ReviewSlider from "./ReviewSlider";
import SplitText from "../../ui/SplitText";
import { fadeInVariants, fadeInUpVariants } from "../../ui/AnimationVariants";

const SliderWrap = () => {
  const sliderRef = useRef(null);
  const isInView = useInView(sliderRef, { once: true, amount: 0.2 });

  return (
    <>
      <section id="reviews" ref={sliderRef} className="w-full mt-60">
        <div className="w-4/5 max-w-container mx-auto">
          <SplitText classes="title__lg max-w-[26rem] ml-4">
            What our customers say about us
          </SplitText>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.4, stiffness: 10, damping: 10 }}
            className="para max-w-[22rem] mt-8 mb-12 ml-4"
          >
            If you don't see your question answered, feel free to reach out to
            our dedicated team for personalized assistance.
          </motion.p>
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ stiffness: 10, damping: 10 }}
            className=""
          >
            <ReviewSlider />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SliderWrap;
