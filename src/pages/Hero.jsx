import React, { useState } from "react";
import DatePicker from "react-datepicker";

function Hero() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div id="Hero" className="backgrounds ">
      <div className="bg-black/30 w-screen h-screen justify-center items-center p-10 flex flex-col space-y-10">
        <div className="text-white text-8xl font-bold text-center">
          Land Of Peace <br /> LOP Inn
        </div>
        <div className="bg-white rounded-2xl px-15 py-10 flex justify-evenly gap-10 w-fit text-left Poppins text-xl">
          <div>
            Check Out <br />
            <div className="text-sm">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div>
            Check In
            <br /> <input type="date" className="text-sm" alt="check in date" />
          </div>
          <div>
            Room Type
            <br />
            <select className="text-sm">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
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
          <button className="rounded-lg border-2 py-1.5 px-6 border-[#87d551] custom-button">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
