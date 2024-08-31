import { motion } from "framer-motion";

const Accordion = ({ title, answer, isOpen, onToggle }) => {
  return (
    <motion.button
      initial="hidden"
      whileInView="visible"
      variants={animateIn}
      viewport={{ once: true }}
      transition={{ delay: 0.25, stiffness: 1000, damping: 12 }}
      className="w-full p-2 bg-gray-50 border-2 rounded-lg my-3 shadow-lg"
    >
      <div
        onClick={onToggle}
        className="flex w-full justify-between items-center bg-gray-50 text-primary cursor-pointer p-4 rounded-lg"
      >
        <span className="title__sm pr-4 text-left">{title}</span>
        <div className="p-2 bg-secondary rounded-full">
          <svg
            className="fill-white shrink-1"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                isOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                isOpen && "!rotate-180"
              }`}
            />
          </svg>
        </div>
      </div>
      <div
        className={`grid pl-4 pr-20 overflow-hidden transition-all duration-300 ease-in-out text-primary text-sm text-left ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="para overflow-hidden max-w-[40rem]">{answer}</div>
      </div>
    </motion.button>
  );
};

export default Accordion;

const animateIn = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: -20,
    opacity: 0,
  },
};
