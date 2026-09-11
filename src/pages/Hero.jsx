import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms, setDates } from "../Redux/Reducer";
import { useAvailability } from "../components/AvailabilityCheck";
import Loadings from "../components/Loadings";

function Hero({ isMobile }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { rooms, status, error, unsubscribe } = useSelector(
    (state) => state.rooms,
  );
  useEffect(() => {
    dispatch(fetchRooms());

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [dispatch]);

  const [name, setName] = useState("Standard");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(0);

  const availableQty = useAvailability(checkin, checkout, rooms);

  const availableRooms = useMemo(() => {
    return rooms.filter((room) => room.Available === true);
  }, [rooms]);

  const handleClick = () => {
    navigate(`/Room/${name}`, {
      state: {
        checkin,
        checkout,
        guests,
        availableQty,
      },
    });
  };

  if (status === "loading") return <Loadings />;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div id="Hero" className="backgrounds relative">
      <div
        className={`bg-black/30 w-screen px-10 items-center flex flex-col shadow-2xl ${isMobile ? "h-fit py-20 " : "justify-center h-170 py-10]"}`}
      >
        <div className={`flex flex-col ${isMobile ? "gap-5" : "ml-[15%] gap-10"}`}>
          <div
            className={`flex flex-col w-[55%] text-white text-wrap font-medium  ${isMobile ? "text-5xl py-10 " : "align-left text-7xl"}`}
          >
            LOP Inn Where comfort meets rest and productivity.
            <p
              className={`font-extralight   ${isMobile ? "text-sm  " : "text-xl"}`}
            >
              Quiet suites minutes from the airport. Fast WIFI, real beds and a
              gorgeous garden view.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`bg-white rounded-xl flex justify-evenly items-center align-self-center text-left Poppins text-base absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-10 shadow-xl ${isMobile ? "scale-45 text-sm p-7 gap-5 sm:scale-55 md:scale-85 w-[90%]" : "p-8 gap-10 w-fit"}`}
      >
        <div>
          Check In
          <br />
          <input
            type="datetime-local"
            className="text-sm"
            onChange={(e) => {
              setCheckin(e.target.value);
              dispatch(setDates({ checkin: e.target.value, checkout }));
            }}
          />
        </div>
        <div>
          Check Out <br />
          <input
            type="datetime-local"
            className="text-sm"
            onChange={(e) => {
              setCheckout(e.target.value);
              dispatch(setDates({ checkin, checkout: e.target.value }));
            }}
            alt="check out date"
            aria-label="Check out date"
          />
        </div>
        <div>
          Room
          <br />
          <select
            className="text-sm"
            onChange={(e) => setName(e.target.value)}
            aria-label="Select room type"
          >
            {rooms
              .filter((room) => room.Available === true)
              .map((room) => {
                const qty = availableQty[room.id] ?? room.Quantity;
                const soldOut = qty === 0;
                return (
                  <option
                    key={room.id}
                    value={room.id}
                    disabled={soldOut}
                    style={{
                      color: soldOut ? "#9ca3af" : "inherit",
                      fontStyle: soldOut ? "italic" : "normal",
                    }}
                  >
                    {soldOut ? `${room.id} — Sold Out` : room.id}
                  </option>
                );
              })}
          </select>
        </div>
        <div>
          Guests <br />
          <input
            type="number"
            min={1}
            max={rooms.find((r) => r.id === name)?.Guests || 1}
            defaultValue={guests || 1}
            className="w-20 text-sm"
            onChange={(e) => setGuests(Number(e.target.value))}
          />
        </div>
        <button
          className="rounded-lg w-48 border-2 h-fit py-3 border-[#7BC24A] custom-button text-sm md:text-lg"
          onClick={handleClick}
          aria-label="book now button"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Hero;