import { StaticImageData } from "next/image";
import coach from "@/app/_assets/vehicles/standard_coach-removebg-preview.png";
import minibus from "@/app/_assets/vehicles/min_bus-removebg-preview.png";
import luxuryMinibus from "@/app/_assets/vehicles/luxury_people_carrier-removebg-preview.png";

interface VehicleItem {
  image: StaticImageData;
  buttonTitle: string;
  displayTitle: string;
  description: string;
  listTitle: string;
  listItems: string[];
}

const vehicleData: VehicleItem[] = [
  {
    image: coach,
    buttonTitle: "Book Standard Coach",
    displayTitle: "Standard Coach - 32 Seats",
    description:
      "The most popular option we offer, these vehicles are perfect for pretty much every occasion providing a no-fuss option for travel.",
    listTitle: "Key Features:",
    listItems: [
      "Comfortable seats",
      "Air conditioning",
      "Media player",
      "Passenger lighting",
      "Spacious legroom",
    ],
  },
  {
    image: minibus,
    buttonTitle: "Book Standard Minibus",
    displayTitle: "Standard Minibus - 16 seats",
    description:
      "Economical, practical and has everything you could need. This vehicle is perfect for those who need to get from A to B, hassle-free.",
    listTitle: "Vehicle Highlights:",
    listItems: [
      "Comfortable seats",
      "Temperature Controls",
      "Media player",
      "Passenger lighting",
      "Spacious legroom",
    ],
  },
  {
    image: luxuryMinibus,
    buttonTitle: "Book Luxury Minibus",
    displayTitle: "Luxury Minibus - 12 seats",
    description:
      "Treat yourself to both comfort and luxury, these minibuses are ideal for travelling and arriving in style.",
    listTitle: "Luxury Features:",
    listItems: [
      "Leather trim seats",
      "Temperature Controls",
      "Larger seating",
      "Tinted Windows",
      "Reclining Seats",
      "Device charging ports",
      "Onboard refreshments",
    ],
  },
];

export default vehicleData;
