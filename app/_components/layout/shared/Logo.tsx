import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const Logo = () => (
  <Link href="/" aria-label="Home">
    <div className="flex items-center text-accent relative z-10 text-xl">
      <FaLocationDot />
      <p className="font-semibold text-white sm:text-sm text-xs ml-2">
        Exeter Coach Hire
      </p>
    </div>
  </Link>
);

export default Logo;
