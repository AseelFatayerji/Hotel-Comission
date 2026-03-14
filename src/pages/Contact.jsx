import React from "react";
import ContactForm from "../components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Map from "../components/Map";

function Contact() {
  return (
    <div
      id="Contact"
      className="w-screen h-fit  bg-[#3B5388] rounded-t-[50px] flex flex-col gap-10 py-14 px-10 -mb-5 "
    >
      <div className="flex gap-10">
        <div className="w-[50%]">
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
        <div className="w-[50%] h-full"><Map/></div>
      </div>
      <div className="flex gap-3 text-4xl text-white w-full items-center justify-center">
        <div className="flex w-fit">
          <FontAwesomeIcon icon={faEnvelope} />
          <b className="text-sm font-mono mx-2 text-pretty">
            Email: lopinncr@gmail.com
          </b>
        </div>
        <div className="flex w-fit">
          <div className="w-0.5 h-10 bg-gray-300 mx-3 " />
          <FontAwesomeIcon icon={faPhone} />
          <b className="text-sm font-mono mx-2 "> Phone: +1 (123) 456-7890</b>
        </div>
        <div className="flex w-[33%]">
          <div className="w-0.5 h-10 bg-gray-300 mx-3  " />
          <FontAwesomeIcon icon={faLocationDot} />
          <b className="text-sm font-mono mx-2 text-pretty">
            Address: Bosques de Doña Claudia Casa 23, Heredia Province, Cariari,
            40703, Costa Rica
          </b>
        </div>
      </div>
    </div>
  );
}

export default Contact;
