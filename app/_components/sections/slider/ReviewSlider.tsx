"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import reviewData from "./reviewData";

import SliderCard from "./SliderCard";
import SwiperButtons from "./SwiperButtons";
import SwiperPagination from "./SwiperPagination";

const Slider = () => {
  return (
    <Swiper
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        465: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[Autoplay, Navigation, Pagination]}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: true }}
      className="px-[0.5rem!important]"
    >
      {reviewData.map((review, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <SliderCard cardData={review} />
        </SwiperSlide>
      ))}
      <div className="">
        <SwiperPagination reviews={reviewData} />
      </div>
      <SwiperButtons />
    </Swiper>
  );
};

export default Slider;
