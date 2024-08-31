"use client";

import React from "react";

import AnimatedBurgerButton from "./AnimatedBurgerButton";
import FlyoutContainer from "./FlyoutContainer";

const MenuWrap = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <div className="relative flex justify-end h-auto w-auto top-0 z-2">
      <AnimatedBurgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      <FlyoutContainer isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default MenuWrap;
