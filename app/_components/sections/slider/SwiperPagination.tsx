"use client";

import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface Review {
  name: string;
  location: string;
  review: string;
  rating: number;
}

const SwiperPagination = ({ reviews }: { reviews: Review[] }) => {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(0);

  swiper.on("slideChange", () => {
    setActiveIndex(swiper.realIndex);
  });

  return (
    <>
      <div className="relative flex gap-2 mt-12 justify-center z-20">
        {reviews.map((_, index: number) => (
          <motion.div
            key={index}
            className="h-[5px] rounded-full"
            initial={{ width: "5px", backgroundColor: "#888" }}
            animate={{
              width: activeIndex === index ? "2rem" : "5px",
              backgroundColor: activeIndex === index ? "#2c2c2c" : "#888",
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        ))}
      </div>
    </>
  );
};

export default SwiperPagination;
