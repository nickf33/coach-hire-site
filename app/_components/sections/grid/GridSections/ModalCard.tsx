import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import vehiclesImg from "@/app/_assets/images/close-up-minibuses.webp";
import servicesImg from "@/app/_assets/images/driving.jpeg";
import { fadeInVariants } from "@/app/_components/ui/AnimationVariants";
import { servicesData, vehiclesData, ModalData } from "@/data/tabsData";
import TabsWrap from "./tabs/TabsWrap";

interface ModalCardProps {
  isServices: boolean;
  cardTitle: string;
  cardText: string;
  overlayColor: string;
}

const ModalCard = ({
  isServices,
  cardTitle,
  cardText,
  overlayColor,
}: ModalCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const dataArray = isServices ? servicesData : vehiclesData;

  const vehiclesText = {
    title: "Our Vehicles",
    text: "This is some placeholder text for the inside of the modal. This will not be the final text obviously but I need to work on passing the props with the correct types. This will help later.",
  };

  const serviceText = {
    title: "Our Services",
    text: "This is some placeholder text for the inside of the modal. This will not be the final text obviously but I need to work on passing the props with the correct types. This will help later.",
  };

  return (
    <div className="relative w-full h-full ">
      <div
        className="relative rounded-lg w-full h-full p-6 shadow overflow-hidden transition hover:scale-[1.02] hover:shadow-lg cursor-pointer"
        onClick={toggleModal}
      >
        <div className="absolute top-4 right-4 border-2 bg-accent rounded-full z-50 grid place-content-center text-xs text-white p-3 rotate-[-45deg] transition hover:bg-primary">
          <FaArrowLeft />
        </div>
        <TextWrap
          cardTitle={cardTitle}
          cardText={cardText}
          isServices={isServices}
        />
        <BackgroundImage
          backgroundImg={isServices ? servicesImg : vehiclesImg}
          overlayColor={overlayColor}
        />
      </div>
      <Modal
        isOpen={isOpen}
        toggleModal={toggleModal}
        dataArray={dataArray}
        isServices={isServices}
        modalTitle={isServices ? serviceText.title : vehiclesText.title}
        modalText={isServices ? serviceText.text : vehiclesText.text}
      />
    </div>
  );
};

interface TextWrapProps {
  cardTitle: string;
  cardText: string;
  isServices: boolean;
}

const TextWrap = ({ cardTitle, cardText, isServices }: TextWrapProps) => {
  return (
    <div className={`relative z-20 h-full flex flex-col justify-between`}>
      <p
        className={`title__md mb-2 ${
          isServices ? "text-white" : "text-primary"
        }`}
      >
        {cardTitle}
      </p>
      <p className={`para w-4/5 ${isServices ? "text-white" : "text-primary"}`}>
        {cardText}
      </p>
    </div>
  );
};

interface BackgroundImgProps {
  backgroundImg: StaticImageData;
  overlayColor: string;
}

const BackgroundImage = ({
  backgroundImg,
  overlayColor,
}: BackgroundImgProps) => {
  return (
    <div className="absolute inset-0">
      <div className={`${overlayColor} absolute inset-0 z-0 opacity-90`}></div>

      <Image
        src={backgroundImg}
        alt="background image"
        width={1000}
        height={1000}
        className="object-cover h-full"
      />
    </div>
  );
};

interface ModalProps {
  modalTitle: string;
  modalText: string;
  dataArray: ModalData[];
  isServices: boolean;
  isOpen: boolean;
  toggleModal: () => void;
}

const Modal = ({
  modalTitle,
  modalText,
  dataArray,
  isServices,
  isOpen,
  toggleModal,
}: ModalProps) => {
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
            className="flex flex-col justify-around bg-white px-6 pt-10 rounded-lg h-[90vh] w-[90vw] max-w-container overflow-auto"
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
                className="title__lg"
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
              <TabsWrap dataArray={dataArray} isServices={isServices} />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalCard;
