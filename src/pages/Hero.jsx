import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [name, setName] = useState("Room Name1");
  const handleClick = () => {
    navigate(`/Room/${name}`);
  };
  return (
    <div id="Hero" className="backgrounds ">
      <div className="bg-black/30 w-screen h-fit py-20 px-10 flex flex-col items-center md:space-y-10 md:justify-center md:h-screen md:py-10">
        <div className="text-white text-5xl font-bold text-center text-pretty pt-5 align-text-top md:text-8xl md:align-middle ">
          Land Of Peace <br /> LOP Inn
        </div>
        <div className="bg-white rounded-2xl flex p-7 justify-evenly gap-10 w-fit text-left Poppins text-xl scale-55 md:scale-100 md:px-15 md:py-10 ">
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
              <option>Room Name1</option>
              <option>Room Name2</option>
              <option>Room Name3</option>
              <option>Room Name4</option>
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
