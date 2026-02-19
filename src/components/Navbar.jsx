import { HashLink as NavLink } from "react-router-hash-link";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center w-screen px-4 py-3 select-none fixed top-0 left-0 z-10">
      <div className="">
        <img src={logo} alt="Land Of Peace" className="w-20 h-20" />
      </div>
      <div className="bg-[#87d551]/60 backdrop-blur-sm px-4 h-fit py-2 text-lg rounded-lg flex justify-evenly gap-10 font-bold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/#Rooms">Rooms</NavLink>
        <NavLink to="/#Contact">Contact</NavLink>
      </div>
      <div className="text-transparent">Menue</div>
    </nav>
  );
}

export default Navbar;
