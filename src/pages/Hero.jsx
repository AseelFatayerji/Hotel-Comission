import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loadings from "../components/Loadings";

function Hero({ isMobile }) {
  const navigate = useNavigate();
  const { rooms, status, error } = useSelector((state) => state.rooms);

  const [name, setName] = useState("Standard");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(0);

  const handleClick = () => {
    navigate(`/Room/${name}`, {
      state: { room: rooms.find((room) => room.id === name) },
    });
  };

  if (status === "loading") return <Loadings />;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div id="Hero" className="backgrounds ">
      <div
        className={`bg-black/30 w-screen px-10 items-center flex flex-col ${isMobile ? "h-fit py-20 " : "space-y-10 justify-center h-screen py-10]"}`}
      >
        <div
          className={`flex flex-col text-white  font-bold text-center  ${isMobile ? "text-5xl py-10 align-text-top" : "align-middle text-8xl"}`}
        >
          LOP Inn <b className="text-4xl">Land Of Peace</b>
        </div>
        <div
          className={`bg-white rounded-2xl flex justify-evenly w-fit text-left Poppins text-xl  ${isMobile ? "scale-50 text-lg p-7 gap-5 sm:scale-55 md:scale-85" : "px-15 py-10 gap-10 "}`}
        >
          <div>
            Check Out <br />
            <input type="date" className="text-sm" alt="check out date" />
          </div>
          <div>
            Check In
            <br /> <input type="date" className="text-sm" alt="check in date" />
          </div>
          <div>
            Room
            <br />
            <select
              className="text-sm"
              onChange={(e) => {
                setName(e.target.value);
              }}
            >
              {rooms.map((room) => {
                return (
                  <option
                    key={room.id}
                    value={room.id}
                    disabled={room.Available === false}
                  >
                    {room.id}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            Guests <br />
            <input
              type="number"
              alt="number of guests"
              defaultValue={0}
              className="w-20 text-sm"
            />
          </div>
          <button
            className="rounded-lg border-2 py-1.5 px-6 border-[#87d551] custom-button text-lg md:text-xl"
            onClick={handleClick}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
