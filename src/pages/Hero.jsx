import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loadings from "../components/Loadings";
import { fetchRooms } from "../Redux/Reducer";

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

  const availableRooms = useMemo(() => {
    return rooms.filter((room) => room.Available === true);
  }, [rooms]);

  const handleClick = () => {
    navigate(`/Room/${name}`, {
      state: {
        checkin,
        checkout,
        guests,
      },
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
            Check In
            <br />
            <input
              type="date"
              className="text-sm"
              onChange={(e) => {
                setCheckin(e.target.value);
              }}
              alt="check in date"
              aria-label="Check in date"
            />
          </div>
          <div>
            Check Out <br />
            <input
              type="date"
              className="text-sm"
              onChange={(e) => {
                setCheckout(e.target.value);
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
              onChange={(e) => {
                setName(e.target.value);
              }}
              aria-label="Select room type"
            >
              {availableRooms.map((room) => {
                return (
                  <option
                    key={room.id}
                    value={room.id}
                    disabled={room.Available === false}
                    label={room.id}
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
              min={1}
              max={rooms.find((r) => r.id === name)?.Guests || 1}
              defaultValue={guests || 1}
              className="w-20 text-sm"
              onChange={(e) => setGuests(Number(e.target.value))}
            />
          </div>
          <button
            className="rounded-lg border-2 py-1.5 px-6 border-[#7BC24A] custom-button text-lg md:text-xl"
            onClick={handleClick}
            aria-label="book now button"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
