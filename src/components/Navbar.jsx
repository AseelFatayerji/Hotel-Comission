import { HashLink as NavLink } from "react-router-hash-link";

function Navbar() {
  return (
    <nav className="flex justify-between w-screen px-4 py-3 select-none fixed top-0 left-0">
      <div className="">Logo.</div>
      <div className="bg-[#87d551]/40 px-4 py-2 text-lg rounded-lg flex justify-evenly gap-10 font-bold">
        <NavLink to="#Hero">Home</NavLink>
        <NavLink to="#Rooms">Rooms</NavLink>
        <NavLink to="#Contact">Contact</NavLink>
      </div>
      <div className="text-transparent">Menue</div>
    </nav>
  );
}

export default Navbar;
