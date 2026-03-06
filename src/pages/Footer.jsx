import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../assets/logo.png";

function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 810px)" });
  return (
    <footer className="flex flex-col w-screen px-4 py-2 rounded-t-[20px] bg-[#87d551] text-neutral-200 Poppins md:px-14">
      <div className="flex flex-row pt-3">
        <div className="flex justify-start h-20 w-20 pr-3 md:w-[35%] ">
          <img alt="Land Of Peace Logo" src={logo} width="80" />
        </div>
        <div className="flex flex-row w-[65%] justify-end gap-16 text-nowrap text-sm md:text-lg">
          <div className="grid grid-cols-3 gap-16 md:gap-12">
            <div className="flex flex-col ">
              <div className="font-bold uppercase text-white md:pb-2">
                Land Of {isMobile && <br />} Peace
              </div>
              <a href="#Contact" className="text-sm hover:underline hover:text-white">
                Contact
              </a>
              <a href="#xxx" className="text-sm hover:underline hover:text-white">
                Support
              </a>
            </div>
            <div className="flex flex-col">
              <div className="font-bold uppercase text-white pb-2">Socails</div>
              <a href="https://www.instagram.com/lopinncr/" className="hover:text-white text-sm">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
              <a href="https://www.facebook.com/LOPInncr" className="hover:text-white text-sm">
                <FontAwesomeIcon icon={faFacebookF} /> Facebook
              </a>
            </div>
            <div className="flex flex-col">
              <div className="font-bold uppercase text-white pb-2">Legal</div>
              <a href="#xxx" className="text-sm hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t  border-gray-500 my-8" />
      <div className="text-center text-white">
        © 2026 Land Of Peace - All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
