import { collection, addDoc, Timestamp } from "firebase/firestore";
import { booking } from "../firebase";
import { useLocation, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faPhone,
  faUser,
  faEnvelope,
  faRuler,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRooms } from "../Redux/Reducer";

import Navbar from "../components/Navbar";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";
import BookingPopup from "../components/BookingPopup";

function Booking() {
  const location = useLocation();

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

  const { room_type } = useParams();
  const { checkin, checkout, guests: initialGuests } = location.state || {};

  const { img, Price, Disc, Size, Baths, Beds, Guests, Req } =
    rooms.find((room) => room.id === room_type) || {};

  const [bookingName, SetName] = useState("");
  const [bookingEmail, SetEmail] = useState("");
  const [bookingNumber, SetPhone] = useState("");
  const [bookingDateIn, setCheckIn] = useState(checkin || 0);
  const [bookingDateOut, setCheckOut] = useState(checkout || 0);

  const [bookingGuests, setBookingGuests] = useState(initialGuests || 1);
  const [guestError, setGuestError] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const [popupStatus, setPopupStatus] = useState(null);

  const extraGuestFee = useMemo(() => {
    const baseGuests = 3;
    const extra = Math.max(0, bookingGuests - baseGuests);
    return extra * 10;
  }, [bookingGuests]);

  const totalPrice = Price ? Price + extraGuestFee : 0;

  const handleGuestChange = (e) => {
    const value = Number(e.target.value);
    if (value > Guests) {
      setGuestError(`Max capacity is ${Guests} guests`);
      setBookingGuests(Guests);
    } else if (value < 1) {
      setBookingGuests(1);
      setGuestError("");
    } else {
      setBookingGuests(value);
      setGuestError("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPopupStatus("loading");

    try {
      console.log("sending");
      await addDoc(collection(booking, "Booking"), {
        "Full Name": bookingName,
        "Email": bookingEmail,
        "Phone": bookingNumber,
        "Guests": bookingGuests,
        "Arrived": false,
        "Cost": totalPrice,
        "Check In": checkin ? Timestamp.fromDate(new Date(checkin)) : null,
        "Check Out": checkout ? Timestamp.fromDate(new Date(checkout)) : null,
        "Room Number": 0,
        "Room Type": room_type.split(" ")[0],
        "Source": "Online",
        "Archive": false,
      });
      console.log("sent");
      setPopupStatus("success");
    } catch (err) {
      console.error(err);
      setPopupStatus("error");
    }
  };
  return (
    <>
      <Navbar />
      {status === "loading" ? (
        <div className="h-screen w-screen bg-[#F9FAFB] px-5 pt-24 pb-5">
          Loading...
        </div>
      ) : (
        <div className="flex justify-around h-fit w-screen bg-[#F9FAFB] px-5 pt-24 pb-5 flex-col gap-5 md:flex-row md:h-screen">
          <div className="relative md:w-[55%] md:h-auto">
            <img src={img} className="rounded-3xl h-full w-full" />
            <div className="absolute rounded-3xl h-full w-full p-5 bottom-0 left-0 flex items-end text-5xl text-white  bg-linear-to-t from-black/70 via-black/20 to-transparent">
              <div className="flex flex-col">
                <span className="text-2xl line-through opacity-60">
                  {extraGuestFee > 0 ? `$${Price}/Night` : ""}
                </span>
                ${totalPrice}/Night
                {extraGuestFee > 0 && (
                  <span className="text-sm font-light">
                    Includes +${extraGuestFee} extra guest fee
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="h-full flex flex-col gap-10 pb-5 pr-2 w-full md:w-[40%] md:overflow-y-auto">
            <div className="px-3 py-15 bg-white rounded-2xl shadow-[6px_5px_6px_0px_rgba(0,0,0,0.1)] Poppins md:px-10 md:py-10">
              <div className="py-4">
                <FontAwesomeIcon icon={faStar} className="text-[#87d551]" /> 4.8
                (100 reviews)
              </div>
              <label className="text-3x3 py-1 font-bold">{room_type}</label>
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
                  <b className="text-xs font-normal"> {Guests}</b>
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
                  <b className="text-xs font-normal">{Beds}</b>
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
                  <b className="text-xs font-normal"> {Baths}</b>
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
                  <b className="text-xs font-normal">{Size} m²</b>
                </div>
              </div>
              <div className="w-full border-t  border-[#d3d3d3] my-8" />
              <div>
                <label className="text-2xl">About this room</label>
                <p className="text-pretty text-lg font-light md:text-xl">
                  {Disc}
                </p>
              </div>
              <div className="w-full border-t  border-[#d3d3d3] my-8" />
              <div className="text-center text-2xl font-semibold text-red-600">
                {Req}
              </div>
            </div>
            {Req == "" && (
              <div className="px-5 py-10 flex flex-col gap-8 bg-white rounded-2xl shadow-[6px_5px_6px_0px_rgba(0,0,0,0.1)] md:px-10 md:py-15">
                <label className="flex text-4xl w-full justify-center p-5 gap-2 md:text-6xl">
                  Book Your <b className="text-[#87d551] underline">Stay</b>
                </label>
                <form
                  className="Poppins flex flex-col gap-10"
                  onSubmit={handleSubmit}
                >
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
                          SetName(e.target.value);
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
                          SetEmail(e.target.value);
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
                          SetPhone(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-left flex flex-col">
                    Guests
                    <div className="flex">
                      <FontAwesomeIcon
                        icon={faUsers}
                        className="border-2 bg-[#F9FAFB]  border-neutral-300 py-4 border-r-0 px-2 rounded-l-md"
                      />
                      <input
                        type="number"
                        min={1}
                        max={Guests}
                        value={bookingGuests}
                        onChange={handleGuestChange}
                        className="border-2 border-neutral-403 py-1 px-2 rounded-r-md grow w-full"
                      />
                    </div>
                    {guestError && (
                      <span className="text-red-500 text-sm mt-1">
                        {guestError}
                      </span>
                    )}
                    {bookingGuests > 2 && (
                      <span className="text-orange-500 text-sm mt-1">
                        +${extraGuestFee} extra guest fee applied
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between text-sm md:text-xl">
                    <div>
                      Check In
                      <br />
                      <input
                        type="date"
                        alt="check in date"
                        value={bookingDateIn}
                        onChange={(e) => {
                          setCheckIn(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      Check Out <br />
                      <input
                        type="date"
                        alt="check out date"
                        value={bookingDateOut}
                        onChange={(e) => {
                          setCheckOut(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-fit px-6 py-2 self-center text-xl rounded-lg border-2 border-[#87d551] custom-button md:text-3xl"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer />
      {popupStatus && (
        <div className="absolute h-screen w-screen bg-black/40 flex items-center justify-center">
          <BookingPopup
            status={popupStatus}
            onClose={() => setPopupStatus(null)}
          />
        </div>
      )}
    </>
  );
}

export default Booking;
