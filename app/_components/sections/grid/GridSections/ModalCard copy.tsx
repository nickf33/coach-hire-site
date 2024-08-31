"use client";

import React, { useState, ReactNode } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInVariants } from "@/app/_components/ui/AnimationVariants";
import { FaArrowLeft } from "react-icons/fa";
import TabsWrap from "./tabs/TabsWrap";
import { StaticImageData } from "next/image";

interface ModalCardProps<T> {
  cardTitle: string;
  cardText: string;
  modalTitle: string;
  modalText: string;
  backgroundImg: StaticImageData;
  overlayColor: string;
  data: T;
}

function ModalCard<T>({
  cardTitle,
  cardText,
  modalTitle,
  modalText,
  backgroundImg,
  overlayColor,
  data,
}: ModalCardProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  const textColor = overlayColor === "primary" ? "white" : "primary";

  return (
    <div className="relative w-full h-full ">
      <div
        className="relative rounded-lg w-full h-full p-6 shadow overflow-hidden transition hover:scale-[1.02] hover:shadow-lg cursor-pointer"
        onClick={toggleModal}
      >
        <div className="absolute top-4 right-4 border-2 bg-accent rounded-full z-50 grid place-content-center text-xs text-white p-3 rotate-[-45deg] transition hover:bg-primary">
          <FaArrowLeft />
        </div>
        <div
          className={`absolute inset-0 bg-${overlayColor} opacity-90 z-10`}
        />
        <BackgroundImage backgroundImg={backgroundImg} />
        <TextWrap
          cardTitle={cardTitle}
          cardText={cardText}
          textColor={textColor}
        />
      </div>
      <Modal
        isOpen={isOpen}
        toggleModal={toggleModal}
        modalTitle={modalTitle}
        modalText={modalText}
        data={data}
      />
    </div>
  );
}

interface TextProps {
  cardTitle: string;
  cardText: string;
  textColor: string;
}

const TextWrap = ({ cardTitle, cardText, textColor }: TextProps) => {
  return (
    <div className={`relative z-20 h-full flex flex-col justify-between`}>
      <p className={`title__md mb-2 text-${textColor}`}>{cardTitle}</p>
      <p className={`para w-4/5 text-${textColor}`}>{cardText}</p>
    </div>
  );
};

interface BackgroundImgProps {
  backgroundImg: StaticImageData;
}

const BackgroundImage = ({ backgroundImg }: BackgroundImgProps) => {
  return (
    <div className="absolute inset-0">
      <Image
        src={backgroundImg}
        alt="background image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

interface ModalProps<T> {
  modalTitle: string;
  modalText: string;
  isOpen: boolean;
  toggleModal: () => void;
  data: T;
}

const Modal = <T,>({
  modalTitle,
  modalText,
  isOpen,
  toggleModal,
  data,
}: ModalProps<T>) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleModal}
          className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col justify-around bg-white px-6 pt-10 rounded-lg h-[90vh] w-[80vw] overflow-auto"
          >
            <button
              type="button"
              onClick={toggleModal}
              className="absolute top-4 right-4 text-2xl text-white"
            >
              &times;
            </button>
            <div className="w-9/10 mx-auto">
              <motion.h3
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4, stiffness: 10, damping: 10 }}
                className="title__md"
              >
                {modalTitle}
              </motion.h3>
              <motion.p
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5, stiffness: 10, damping: 10 }}
                className="para my-8 max-w-[34rem]"
              >
                {modalText}
              </motion.p>
            </div>
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6, stiffness: 10, damping: 10 }}
              className=""
            >
              <TabsWrap data={data} />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalCard;
