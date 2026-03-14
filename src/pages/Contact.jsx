import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

import ContactForm from "../components/Form";
import Map from "../components/Map";

function Contact() {
  const isMobile = useMediaQuery({ query: "(max-width: 850px)" });
  return (
    <div
      id="Contact"
      className="w-screen h-fit  bg-[#3B5388] rounded-t-[50px] flex flex-col gap-10 py-14 px-5 -mb-5 md:px-10"
    >
      <div className="flex gap-10">
        <div className="md:w-[50%]">
          <label className="text-6xl text-white/80 capitalize">
            Get in touch!
          </label>
          <p className="text-pretty text-white/50 text-lg my-5">
            We are here to assist you with any inquiries, feedback, or support
            you may need. Please fill out the contact form below, and our team
            will get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>
        <div className="w-[50%] h-full py-10 justify-center-safe grow hidden md:flex">
          <Map />
        </div>
      </div>
      <div className="flex text-white w-full items-center justify-center text-xl gap-1 md:text-4xl md:gap-3">
        <div className="flex flex-col  w-fit md:flex-row">
          <FontAwesomeIcon icon={faEnvelope} />
          <b className="text-xs font-mono text-pretty md:text-sm">
            lopinncr@gmail.com
          </b>
        </div>
        <div className="flex items-center ">
          <div className="w-px h-10 max-h-full bg-gray-300 rounded-lg mx-1 md:mx-3 " />
          <div className="flex flex-col gap-1 w-fit md:flex-row">
            <FontAwesomeIcon icon={faPhone} />
            <b className="text-xs font-mono mx-1 text-pretty md:text-sm md:mx-2">
              +506 8439 4242
            </b>
          </div>
        </div>
        <div className="flex items-center w-[35%]">
          <div className="w-px h-10 bg-gray-300 rounded-lg md:mx-3  " />
          <div className="flex flex-col gap-1 md:flex-row">
            <FontAwesomeIcon icon={faLocationDot} />
            <b className="text-xs font-mono mx-1 text-pretty md:text-sm md:mx-2">
              Bosques de Doña Claudia Casa 23 {!isMobile && ", Heredia Province, Cariari, Costa Rica"}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
