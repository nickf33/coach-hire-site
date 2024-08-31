"use client";

import { motion, useInView } from "framer-motion";
import Accordion from "./Accordion";
import faqData from "./faqData";
import { useState, useRef } from "react";
import SplitText from "../../ui/SplitText";
import faqTextData from "./faqTextData";
import { fadeInVariants } from "../../ui/AnimationVariants";

const FAQWrap = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);
  const isInView = useInView(faqRef, { once: true, amount: 0.2 });

  // Toggle function for accordion items
  // evaluates previous index to current selected
  const handleAccordionToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      ref={faqRef}
      id="faq"
      tabIndex="0"
      className="relative mt-60 mb-60"
    >
      <div className="max-w-container w-4/5 mx-auto ">
        <SplitText classes="title__lg max-w-[48rem] ml-4">
          Our team of professionals will endevour to make your trip the best it
          can be
        </SplitText>
        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.6, stiffness: 10, damping: 10 }}
          className="para max-w-[22rem] mt-8 mb-12 ml-4"
        >
          If you don't see your question answered, feel free to reach out to our
          dedicated team for personalised assistance
        </motion.p>
        <div className="ml-auto w-full rounded-lg text-left">
          {faqData.map((item, index) => (
            <div key={index}>
              <Accordion
                title={item.question}
                answer={item.answer}
                isOpen={index === openIndex}
                onToggle={() => handleAccordionToggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQWrap;
