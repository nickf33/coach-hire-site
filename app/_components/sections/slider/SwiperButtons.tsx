import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

const buttonStyles =
  "grid place-content-center h-8 w-8 border border-gray-700 bg-white rounded-full z-20 text-gray-700 transition duration-300 hover:scale-105 active:scale-90 hover:bg-secondary hover:text-white";

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="flex relative gap-5 justify-center items-center my-8 top-auto right-auto">
        <div
          aria-label="button"
          className={buttonStyles}
          onClick={() => swiper.slidePrev()}
        >
          <IoMdArrowBack />
        </div>

        <div
          aria-label="button"
          className={buttonStyles}
          onClick={() => swiper.slideNext()}
        >
          <IoMdArrowForward />
        </div>
      </div>
    </>
  );
};

export default SwiperButtons;
