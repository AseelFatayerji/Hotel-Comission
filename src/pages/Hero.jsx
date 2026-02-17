import React from "react";

function Hero() {
  return (
    <div id="Hero" className="backgrounds ">
      <div className="bg-black/30 w-screen h-screen justify-center items-center p-10 flex flex-col space-y-10">
        <div className="text-white text-8xl font-bold text-center">
          Land Of Peace <br /> LOP Inn
        </div>
        <div className="bg-white rounded-lg px-10 py-5 flex justify-evenly gap-10 w-fit text-left">
          <div>
            Check Out <br /> <input type="date" alt="check out date" />
          </div>
          <div>
            Check In
            <br /> <input type="date" alt="check in date" />
          </div>
          <div>
            Room Type
            <br />
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div>
            Guests <br />
            <input type="number" alt="number of guests" defaultValue={0} />
          </div>
          <button className="rounded-lg border-2 border-[#87d551]">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
