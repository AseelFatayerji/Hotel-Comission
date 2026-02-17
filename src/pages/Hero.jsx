import React from "react";

function Hero() {
  return (
    <div
      id="Hero"
      className="flex p-10 justify-center items-center w-screen h-screen backgrounds"
    >
      <div className="bg-white rounded-lg px-10 py-5 flex justify-evenly gap-10">
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
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default Hero;
