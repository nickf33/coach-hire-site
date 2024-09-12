// Services Images
import corpImg from "@/app/_assets/services/corporate.jpg";
import schoolImg from "@/app/_assets/services/school-trips.png";
import airportImg from "@/app/_assets/services/airport-transfers.jpg";
import weddingImg from "@/app/_assets/services/weddings.jpg";
import tourImg from "@/app/_assets/services/private-tours.jpeg";
import sportsImg from "@/app/_assets/services/sporting-event.jpg";
// Vehicles Images
import coach from "@/app/_assets/vehicles/standard_coach-removebg-preview.png";
import minibus from "@/app/_assets/vehicles/min_bus-removebg-preview.png";
import luxuryMinibus from "@/app/_assets/vehicles/luxury_people_carrier-removebg-preview.png";

import { StaticImageData } from "next/image";

export interface ModalData {
  image: StaticImageData;
  buttonTitle: string;
  displayTitle: string;
  description: string;
  listTitle: string;
  listItems: string[];
}

export const servicesData: ModalData[] = [
  {
    image: corpImg,
    buttonTitle: "Corporate Transport",
    displayTitle: "Seamless corporate event transport",
    description:
      "At Exeter Coach Hire, we understand that successful corporate events hinge on flawless logistics. Our premium coach hire service ensures your team arrives at conferences, team-building exercises, or company retreats relaxed and ready to engage.",
    listTitle: "Key benefits:",
    listItems: [
      "Fleet of modern, well-maintained coaches",
      "Professional, punctual drivers",
      "Flexible scheduling to accommodate your agenda",
      "Comfortable seating with ample legroom",
      "On-board amenities including Wi-Fi and charging ports",
      "Custom branding options available",
    ],
  },
  {
    image: schoolImg,
    buttonTitle: "School Trips",
    displayTitle: "School trip coach hire throughout the UK",
    description:
      "Inspire young minds with safe, reliable transportation for educational excursions across the UK. Exeter Coach Hires specialises in providing top-quality coach hire services for school trips of all sizes and distances.",
    listTitle: "Our school trip services include:",
    listItems: [
      "Rigorous safety standards",
      "DBS-checked, experienced drivers",
      "Coaches equipped with seatbelts and first-aid kits",
      "Variety of vehicle sizes to accommodate requirements",
      "Competitive pricing with transparent quotes",
      "24/7 support for peace of mind",
    ],
  },
  {
    image: airportImg,
    buttonTitle: "Airport Transfer",
    displayTitle: "Stress-free airport transportation",
    description:
      "Start and end your journey in comfort with Exeter Coach Hire's reliable airport transfer service. We offer seamless transportation to and from airports across the UK, ensuring you reach your flight on time or get home swiftly after landing.",
    listTitle: "Our airport transfer service features:",
    listItems: [
      "Punctual pick-up and drop-off",
      "Spacious vehicles with ample luggage room",
      "24/7 availability to accommodate all flight schedules",
      "Real-time flight monitoring to adjust for delays",
      "Professional drivers familiar with airport protocols",
      "Options for individual and group transfers",
    ],
  },
  {
    image: sportsImg,
    buttonTitle: "Sports Events",
    displayTitle: "Reliable transport for fans and teams",
    description:
      "Get in the game with Exeter Coach Hire's specialized sports event transportation. We provide comfortable and efficient coach hire services for both passionate fans and competing teams.",
    listTitle: "Our sports event services offer:",
    listItems: [
      "Flexible scheduling for match days and tournaments",
      "Vehicles to suit all group sizes, from small teams to large fan clubs",
      "Storage space for sports equipment and supporter gear",
      "Optional on-board entertainment systems for long journeys",
      "Experienced drivers familiar with major sporting venues",
      "Competitive group rates",
    ],
  },
  {
    image: weddingImg,
    buttonTitle: "Wedding Transport",
    displayTitle: "Elegant transportation for your special day",
    description:
      "Make your wedding day even more memorable with Exeter Coach Hire's luxury wedding transport services. We offer a touch of elegance and convenience to ensure your celebration runs smoothly from start to finish.",
    listTitle: "Our wedding services include:",
    listItems: [
      "Beautifully maintained, stylish vehicles",
      "Punctual and professionally dressed drivers",
      "Flexible scheduling to fit your wedding timeline",
      "Decorative options to match your wedding theme",
      "Comfortable transportation for bridal parties and guests",
      "Packages for ceremony, reception, and guest shuttle services",
    ],
  },
  {
    image: tourImg,
    buttonTitle: "Private Tours",
    displayTitle: "Customised journeys for unforgettable experiences",
    description:
      "Discover the UK your way with Exeter Coach Hire's private tour services. We offer bespoke travel experiences for individuals, families, and groups looking to explore at their own pace.",
    listTitle: "Our private tour offerings include:",
    listItems: [
      "Customizable itineraries to suit your interests",
      "Knowledgeable drivers with local expertise",
      "Comfortable, well-equipped vehicles for any group size",
      "Flexibility to adjust plans on the go",
      "Partnerships with local attractions for exclusive experiences",
      "Multi-day tour options with accommodation arrangements",
    ],
  },
];

export const vehiclesData: ModalData[] = [
  {
    image: coach,
    buttonTitle: "Standard Coach",
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
    buttonTitle: "Standard Minibus",
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
    buttonTitle: "Luxury Minibus",
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
