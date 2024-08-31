"use client";

import React, { useRef, useEffect } from "react";
import Rings from "./Rings";
import FooterGrid from "./FooterGrid";
import SplitText from "../../ui/SplitText";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { fadeInVariants } from "../../ui/AnimationVariants";

const FooterWrap = () => {
  const footerRef = useRef(null);

  const footerInView = useInView(footerRef, { once: true, amount: 0.35 });

  return (
    <>
      <footer
        id="footer"
        ref={footerRef}
        tabIndex={0}
        className="relative mx-auto max-w-container w-9/10"
      >
        <div className="relative top-[1.65rem] z-10">
          <SplitText classes="title__lg text-center mx-auto text-primary max-w-[34rem]">
            Reliable Quality Coach & Mini Bus Travel in Exeter & Devon
          </SplitText>

          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.4, stiffness: 10, damping: 10 }}
            className="para mx-auto text-center max-w-[22rem] my-8 mb-16"
          >
            If you don't see your question answered, feel free to reach out to
            our dedicated team for personalised assistance
          </motion.p>

          <Button footerInView={footerInView} />
        </div>
        <Rings footerInView={footerInView} />
        <div
          id="#booking"
          className="relative bottom-10 h-auto mb-10 w-full max-w-container bg-light mx-auto z-50 rounded-lg flex gap-5 laptop:flex-col-reverse"
        >
          <FooterGrid />
        </div>
      </footer>
    </>
  );
};

const Button = ({ footerInView }: { footerInView: boolean }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={footerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
      >
        <Link href="#booking" className="mt-10">
          <button
            type="button"
            className=" flex items-center mx-auto bg-white border-2 border-primary text-primary py-2 pr-2 pl-6 rounded-full transition duration-200 hover:scale-[1.02] shadow hover:shadow-lg active:scale-95 active:shadow-none hover:bg-primary hover:text-white"
          >
            <span className="mr-4">Get Started</span>
          </button>
        </Link>
      </motion.div>
    </>
  );
};

export default FooterWrap;
