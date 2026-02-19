import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import temp from "../assets/temp-room.jpg";
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

function Booking() {
  const [bookingName, SetName] = useState("");
  const [bookingEmail, SetEmail] = useState("");
  const [bookingNumber, SetPhone] = useState("");

  const { room_name } = useParams();
  const rooms = [
    {
      id: 1,
      img: temp,
      name: "Room Name1",
      disc: "Room Name1",
      size: 125,
      beds: 2,
      baths: 2,
      guests: 4,
      price: "125$",
    },
    {
      id: 2,
      img: temp,
      name: "Room Name2",
      disc: "Room Name2",
      size: 125,
      beds: 2,
      baths: 2,
      guests: 4,
      price: "200$",
    },
    {
      id: 3,
      img: temp,
      name: "Room Name3",
      disc: "Room Name3",
      size: 125,
      beds: 2,
      baths: 2,
      guests: 4,
      price: "225$",
    },
    {
      id: 4,
      img: temp,
      name: "Room Name4",
      disc: "Room Name4",
      size: 125,
      beds: 2,
      baths: 2,
      guests: 4,
      price: "325$",
    },
  ];
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
      <div className=" flex justify-around h-screen w-screen bg-[#F9FAFB] p-5">
        <div className=" w-[50%]">
          <img src={img} className="rounded-3xl h-full w-full" />
        </div>
        <div className="scroll-auto h-fit  w-[40%] flex flex-col gap-10">
          <div className="px-10 py-15 bg-white rounded-2xl shadow-[6px_5px_6px_0px_rgba(0,0,0,0.1)] Poppins">
            <div className="py-4">
              <FontAwesomeIcon icon={faStar} className="text-[#87d551]" /> 4.8
              (100 reviews)
            </div>
            <label className="text-3xl py-3 font-bold">{room_name}</label>
            <div className="w-full border-t  border-[#d3d3d3] my-8" />
            <div className="flex gap-4 justify-evenly">
              <div
                className="py-4 px-6 bg-[#F9FAFB] flex flex-col text-center justify-center content-center
             rounded-2xl w-fit"
              >
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-[#87d551] text-2xl self-center"
                />
                <b className="text-neutral-400 font-light">
                  Guests <br />
                </b>
                {guests}
              </div>
              <div
                className="py-4 px-6 bg-[#F9FAFB] flex flex-col text-center justify-center content-center
             rounded-2xl w-fit"
              >
                <FontAwesomeIcon
                  icon={faBed}
                  className="text-[#87d551] text-2xl self-center"
                />
                <b className="text-neutral-400 font-light">
                  Bedroom <br />
                </b>
                {bed}
              </div>
              <div
                className="py-4 px-6 bg-[#F9FAFB] flex flex-col text-center justify-center content-center
             rounded-2xl w-fit"
              >
                <FontAwesomeIcon
                  icon={faBath}
                  className="text-[#87d551] text-2xl self-center"
                />
                <b className="text-neutral-400 font-light">
                  Bathroom <br />
                </b>
                {bath}
              </div>
              <div
                className="py-4 px-6 bg-[#F9FAFB] flex flex-col text-center justify-center content-center
             rounded-2xl w-fit"
              >
                <FontAwesomeIcon
                  icon={faRuler}
                  className="text-[#87d551] text-2xl self-center"
                />
                <b className="text-neutral-400 font-light">
                  Area <br />
                </b>
                {size} m²
              </div>
            </div>
            <div className="w-full border-t  border-[#d3d3d3] my-8" />
            <div>
              <label className="text-2xl">About this room</label>
              <p className="text-pretty text-xl font-light">{disc}</p>
            </div>
          </div>
          <div className="px-10 py-15 flex flex-col gap-8 bg-white rounded-2xl shadow-[6px_5px_6px_0px_rgba(0,0,0,0.1)]">
            <label className="flex text-6xl w-full gap-5 justify-center p-5">
              Book Your <b className="text-[#87d551] underline">Stay</b>
            </label>
            <form className="Poppins px-10 flex flex-col gap-10">
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
                    className="border-2 border-neutral-400 py-3 px-2 rounded-r-md grow"
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
                    className="border-2 border-neutral-400 py-3 px-2 rounded-r-md grow"
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
                    className="border-2 border-neutral-400 py-3 px-2 rounded-r-md grow"
                    onChange={(e) => {
                      SetPhone(value);
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between text-xl">
                <div>
                  Check Out <br /> <input type="date" alt="check out date" />
                </div>
                <div>
                  Check In
                  <br /> <input type="date" alt="check in date" />
                </div>
              </div>
              <button className="w-fit px-6 py-2 self-center text-3xl rounded-lg border-2 border-[#87d551]">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
