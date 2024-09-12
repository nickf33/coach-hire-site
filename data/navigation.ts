import { IconType } from "react-icons";
import { IoHome, IoPeople } from "react-icons/io5";
import { IoMdApps } from "react-icons/io";
import { FaBus, FaCalendarAlt, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdOutlineReviews, MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhone, FaTwitter, FaInstagram } from "react-icons/fa6";

export interface NavLink {
  id: string;
  link: string;
  text: string;
  icon: IconType;
}

export interface ContactLink {
  link: string;
  text: string;
  icon: IconType;
}

export interface SocialLink {
  link: string;
  icon: IconType;
  label: string;
}

export interface AddressProps {
  lineOne: string;
  lineTwo: string;
  lineThree: string;
  lineFour: string;
  postcode: string;
}

export const navLinks: NavLink[] = [
  { id: "home", link: "/", text: "Home", icon: IoHome },
  { id: "vehicles", link: "#vehicles", text: "Vehicles", icon: IoPeople },
  { id: "services", link: "#services", text: "Services", icon: FaBus },
  { id: "reviews", link: "#reviews", text: "Reviews", icon: MdOutlineReviews },
  { id: "faqs", link: "#faqs", text: "FAQs", icon: IoMdApps },
  { id: "booking", link: "#booking", text: "Booking", icon: FaCalendarAlt },
];

export const contactLinks: ContactLink[] = [
  { link: "tel:+447413977023", text: "+44 7413 977 023", icon: FaPhone },
  {
    link: "mailto:info@exetercoachhire.co.uk",
    text: "info@exetercoachhire.co.uk",
    icon: MdOutlineAlternateEmail,
  },
];

export const socialLinks: SocialLink[] = [
  {
    link: "https://facebook.com",
    icon: FaFacebookF,
    label: "facebook icon link",
  },
  { link: "https://twitter.com", icon: FaTwitter, label: "twitter icon link" },
  {
    link: "https://instagram.com",
    icon: FaInstagram,
    label: "instagram icon link",
  },
  {
    link: "https://whatsapp.com",
    icon: FaWhatsapp,
    label: "whatsapp icon link",
  },
];

export const address: AddressProps = {
  lineOne: "Main Street",
  lineTwo: "Town Name",
  lineThree: "County",
  lineFour: "",
  postcode: "BN17 7AR",
};

export const getNavLinkById = (id: string): NavLink | undefined => {
  return navLinks.find((link) => link.id === id);
};
