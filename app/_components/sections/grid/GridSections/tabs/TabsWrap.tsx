import { fadeInVariants } from "@/app/_components/ui/AnimationVariants";
import { motion, AnimatePresence } from "framer-motion";
import TabsNav from "./TabsNav";
import React, { useState } from "react";
import { ModalData } from "@/data/tabsData";
import Image from "next/image";

interface TabsWrapProps {
  dataArray: ModalData[];
  isServices: boolean;
}

const TabsWrap = ({ dataArray, isServices }: TabsWrapProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  const buttonArray: any = [];
  dataArray.forEach((item) => {
    buttonArray.push(item.buttonTitle);
  });

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        viewport={{ once: true, amount: 0.5 }}
        className="w-9/10 mx-auto flex flex-wrap"
      >
        <TabsNav
          itemNames={buttonArray}
          activeTab={activeTab}
          handleClick={handleClick}
          isServices={isServices}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-9 w-full gap-5 my-8 border-primary"
          >
            <motion.div className="sm:col-span-4 rounded-lg overflow-hidden bg-light shadow-lg col-span-9">
              <Image
                src={dataArray[activeTab].image}
                alt="image"
                width={600}
                height={600}
                className={`${
                  isServices ? "object-cover" : "object-contain object-center"
                } h-full`}
              />
            </motion.div>
            <motion.div className="sm:col-span-5 rounded-lg p-4 bg-light shadow-lg text-primary h-full col-span-9">
              <p className="text-lg font-semibold mb-4">
                {dataArray[activeTab].displayTitle}
              </p>
              <p className="text-sm font-nomral">
                {dataArray[activeTab].description}
              </p>
              <p className="font-semibold text-sm my-4">
                {dataArray[activeTab].listTitle}
              </p>

              {dataArray[activeTab].listItems.map((item, index) => (
                <p
                  key={index}
                  className="text-accent before:content-['✔'] text-sm my-1"
                >
                  <span className="text-primary ml-2">{item}</span>
                </p>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const Features = () => {
  return (
    <>
      <div className=""></div>
    </>
  );
};

export default TabsWrap;
