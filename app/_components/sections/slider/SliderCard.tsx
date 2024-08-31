import React from "react";
import Quote from "@/app/_assets/images/quote.png";
import Image from "next/image";

interface CardData {
  name: string;
  review: string;
  location: string;
  rating: number;
}

const SliderCard = ({ cardData }: { cardData: CardData }) => {
  return (
    <>
      <div className="flex flex-col justify-around h-auto border min-h-60 shadow-lg rounded-lg p-4 text-primary">
        <Image
          src={Quote}
          alt="Qoute mark"
          width={200}
          height={200}
          className="w-8"
        />
        <p className="text-sm my-4">{cardData.review}</p>
        <p className="text-xs font-bold">
          {cardData.name}
          {", "}
          {cardData.location}
        </p>
      </div>
    </>
  );
};

export default SliderCard;
