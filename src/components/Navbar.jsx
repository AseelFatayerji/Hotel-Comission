import { HashLink as NavLink } from "react-router-hash-link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 850px)" });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="flex justify-between items-center w-screen px-4 py-3 select-none fixed top-0 left-0 z-10">
        <div className="">
          <img
            src="https://ik.imagekit.io/sas2seqly/LopInn/logo.png?updatedAt=1773022427960"
            alt="Land Of Peace"
            className="w-15 h-15 md:w-20 md:h-20"
          />
        </div>
        <div className="bg-[#7BC24A]/60 backdrop-blur-sm  h-fit px-1 py-2 text-sm rounded-lg justify-evenly gap-1 hidden font-bold md:text-lg md:px-4 md:gap-10 md:flex">
          <NavLink to="/#Hero">Home</NavLink>
          <NavLink to="/#Rooms">Rooms</NavLink>
          <NavLink to="/#Contact">Contact</NavLink>
        </div>
        <div
          className={`text-white  rounded-lg py-3 px-1 ${isMobile ? "bg-[#7BC24A]" : "pointer-none text-transparent "}`}
        >
          {/* <!-- From Uiverse.io by vk-uiux -->  */}
          <div id="menuToggle" className="scale-75">
            <input
              id="checkbox"
              type="checkbox"
              checked={isOpen}
              onChange={() => setIsOpen(!isOpen)}
            />
            <label className="toggle" htmlFor="checkbox">
              <div className="bar bar--top"></div>
              <div className="bar bar--middle"></div>
              <div className="bar bar--bottom"></div>
            </label>
          </div>
        </div>
        {isOpen && (
          <motion.div
            className="absolute justify-end rounded-lg bg-[#7BC24A]/50 backdrop-blur-sm py-3 px-2 overflow-hidden text-center top-16 right-4 sm:hidden"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <nav className="  w-fit flex flex-col gap-3  items-end ">
              <NavLink to="/#Hero">Home</NavLink>
              <NavLink to="/#Rooms">Rooms</NavLink>
              <NavLink to="/#Contact">Contact</NavLink>
            </nav>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
