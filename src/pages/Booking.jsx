import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faPhone,
  faRuler,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Footer from "./Footer";

function Booking({rooms}) {
  const [bookingName, SetName] = useState("");
  const [bookingEmail, SetEmail] = useState("");
  const [bookingNumber, SetPhone] = useState("");

  const { room_name } = useParams();
 
  const room = rooms.find((item) => {
    return item.name == room_name;
  });
  const img = room.img;
  const price = room.price;
  const disc = room.disc;
  const size = room.size;
  const bath = room.baths;
  const bed = room.beds;
  const guests = room.guests;
  return (
    <>
      <Navbar />
      <div className="flex justify-around h-screen w-screen bg-[#F9FAFB] px-5 pt-24 pb-5 flex-col gap-10 md:flex-row">
        <div className="  md:w-[55%] md:h-auto">
          <img src={img} className="rounded-3xl h-full w-full" />
        </div>
        <div className="h-full flex flex-col gap-10 pb-5 pr-2 w-full md:w-[40%] md:overflow-y-auto">
          <div className="px-3 py-15 bg-white rounded-2xl shadow-[6px_5px_6px_0px_rgba(0,0,0,0.1)] Poppins md:px-10 md:py-10">
            <div className="py-4">
              <FontAwesomeIcon icon={faStar} className="text-[#87d551]" /> 4.8
              (100 reviews)
            </div>
            <label className="text-3x3 py-1 font-bold">{room_name}</label>
            <div className="w-full border-t border-[#d3d3d3] my-8" />
            <div className="flex justify-evenly gap-1 md:gap-4">
              <div
                className="px-3 py-1 bg-[#F9FAFB] flex flex-col text-center justify-center content-center
             rounded-2xl w-fit md:py-4 md:px-6"
              >
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-[#87d551] self-center text-lg md:text-2xl"
                />
                <b className="text-neutral-400 font-light text-sm md:text-md">
                  Guests
                </b>
                <b className="text-xs font-normal"> {guests}</b>
              </div>
              <div
                className="px-3 py-1 bg-[#F9FAFB] flex flex-col text-center justify-center content-center
             rounded-2xl w-fit md:py-4 md:px-6"
              >
                <FontAwesomeIcon
                  icon={faBed}
                  className="text-[#87d551] self-center text-lg md:text-2xl"
                />
                <b className="text-neutral-400 font-light text-sm md:text-md">
                  Bedroom
                </b>
                <b className="text-xs font-normal">{bed}</b>
              </div>
              <div
                className="px-3 py-1 bg-[#F9FAFB] flex flex-col text-center justify-center content-center
             rounded-2xl w-fit md:py-4 md:px-6"
              >
                <FontAwesomeIcon
                  icon={faBath}
                  className="text-[#87d551] self-center text-lg md:text-2xl"
                />
                <b className="text-neutral-400 font-light text-sm md:text-md">
                  Bathroom
                </b>
                <b className="text-xs font-normal"> {bath}</b>
              </div>
              <div
                className="px-3 py-1 bg-[#F9FAFB] flex flex-col text-center justify-center content-center
             rounded-2xl md:py-4 md:px-4"
              >
                <FontAwesomeIcon
                  icon={faRuler}
                  className="text-[#87d551] self-center text-lg md:text-2xl"
                />
                <b className="text-neutral-400 font-light text-sm md:text-md">
                  Area
                </b>
                <b className="text-xs font-normal">{size} m²</b>
              </div>
            </div>
            <div className="w-full border-t  border-[#d3d3d3] my-8" />
            <div>
              <label className="text-2xl">About this room</label>
              <p className="text-pretty text-lg font-light md:text-xl">
                {disc}
              </p>
            </div>
          </div>
          <div className="px-5 py-10 flex flex-col gap-8 bg-white rounded-2xl shadow-[6px_5px_6px_0px_rgba(0,0,0,0.1)] md:px-10 md:py-15">
            <label className="flex text-4xl w-full gap-2 justify-center p-5 md:text-6xl">
              Book Your <b className="text-[#87d551] underline">Stay</b>
            </label>
            <form className="Poppins flex flex-col gap-10">
              <div className="text-left flex flex-col">
                Name
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="border-2 bg-[#F9FAFB] border-neutral-300 py-4 border-r-0 px-2 rounded-l-md"
                  />
                  <input
                    type="text"
                    alt="enter your name"
                    placeholder="Enter Your Full Name"
                    className="border-2 border-neutral-403 py-1 px-2 rounded-r-md grow w-full"
                    onChange={(e) => {
                      SetName(value);
                    }}
                  />
                </div>
              </div>
              <div className="text-left flex flex-col">
                Email
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="border-2 bg-[#F9FAFB]  border-neutral-300 py-4 border-r-0 px-2 rounded-l-md"
                  />
                  <input
                    type="email"
                    alt="enter your email"
                    placeholder="your-email@mail.com"
                    className="border-2 border-neutral-403 py-1 px-2 rounded-r-md grow w-full"
                    onChange={(e) => {
                      SetEmail(value);
                    }}
                  />
                </div>
              </div>
              <div className="text-left flex flex-col">
                Phone Number
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="border-2 bg-[#F9FAFB]  border-neutral-300 py-4 border-r-0 px-2 rounded-l-md"
                  />
                  <input
                    type="number"
                    alt="enter your number"
                    placeholder="123456789"
                    className="border-2 border-neutral-403 py-1 px-2 rounded-r-md grow w-full"
                    onChange={(e) => {
                      SetPhone(value);
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between text-sm md:text-xl">
                <div>
                  Check Out <br /> <input type="date" alt="check out date" />
                </div>
                <div>
                  Check In
                  <br /> <input type="date" alt="check in date" />
                </div>
              </div>
              <button className="w-fit px-6 py-2 self-center text-xl rounded-lg border-2 border-[#87d551] custom-button md:text-3xl">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Booking;
