import { HashLink as NavLink } from "react-router-hash-link";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center w-screen px-4 py-3 select-none fixed top-0 left-0 z-10">
      <div className="">
        <img src={logo} alt="Land Of Peace" className="w-15 h-15 md:w-20 md:h-20" />
      </div>
      <div className="bg-[#87d551]/60 backdrop-blur-sm  h-fit px-1 py-2 text-sm rounded-lg flex justify-evenly gap-1 font-bold md:text-lg md:px-4 md:gap-10">
        <NavLink to="/#Hero">Home</NavLink>
        <NavLink to="/#Rooms">Rooms</NavLink>
        <NavLink to="/#Contact">Contact</NavLink>
      </div>
      <div className="text-transparent">Menue</div>
    </nav>
  );
}

export default Navbar;
