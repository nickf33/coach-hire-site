"use client";
import React from "react";
import { motion } from "framer-motion";

interface TabsNavProps {
  itemNames: string[];
  activeTab: number;
  handleClick: (index: number) => void;
  isServices: boolean;
}

const TabsNav = ({
  itemNames,
  activeTab,
  handleClick,
  isServices,
}: TabsNavProps) => {
  const namesLength = itemNames.length;
  return (
    <div
      className={`w-full grid ${
        isServices ? "grid-cols-2" : "grid-cols-1"
      } sm:grid-cols-3 gap-4 sm:gap-5 ${
        isServices
          ? "lg:grid-cols-6"
          : `lg:grid-cols-${namesLength > 6 ? 6 : namesLength}`
      }`}
    >
      {itemNames.map((name, index) => (
        <motion.button
          type="button"
          key={index}
          onClick={() => handleClick(index)}
          className={`h-12
            ${
              activeTab === index
                ? "bg-accent text-white"
                : "bg-white text-primary border-2 border-primary"
            } 
            sm:text-xs text-2xs py-2 px-4 rounded-full transition active:scale-[0.95]
            flex-grow-0 flex-shrink-0 basis-auto
          `}
        >
          {name}
        </motion.button>
      ))}
    </div>
  );
};

export default TabsNav;
