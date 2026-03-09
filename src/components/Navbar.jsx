import { HashLink as NavLink } from "react-router-hash-link";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center w-screen px-4 py-3 select-none fixed top-0 left-0 z-10">
      <div className="">
        <img
          src={logo}
          alt="Land Of Peace"
          className="w-15 h-15 md:w-20 md:h-20"
        />
      </div>
      <div className="bg-[#87d551]/60 backdrop-blur-sm  h-fit px-1 py-2 text-sm rounded-lg justify-evenly gap-1 hidden font-bold md:text-lg md:px-4 md:gap-10 md:flex">
        <NavLink to="/#Hero">Home</NavLink>
        <NavLink to="/#Rooms">Rooms</NavLink>
        <NavLink to="/#Contact">Contact</NavLink>
      </div>
      <div className="text-white md:text-transparent md:pointer-none:">
        {/* <!-- From Uiverse.io by vk-uiux -->  */}
        <div id="menuToggle" className="scale-75">
          <input id="checkbox" type="checkbox" />
          <label className="toggle" htmlFor="checkbox">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
