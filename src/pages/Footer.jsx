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
    <footer className="flex flex-col w-screen px-4 rounded-t-[20px] bg-[#87d551] text-neutral-200 Poppins md:px-14">
      <div className="flex flex-row pt-5">
        <div className="flex justify-start h-20 w-20 pr-3 md:w-[35%] ">
          <img alt="Land Of Peace Logo" src={logo} width="80" />
        </div>
        <div className="flex flex-row w-[65%] justify-end gap-16 text-nowrap text-sm md:text-lg">
          <div className="grid grid-cols-3 gap-16 md:gap-12">
            <div className="flex flex-col gap-2">
              <div className="font-bold uppercase text-white md:pb-3">
                Land Of {isMobile && <br />} Peace
              </div>
              <a href="#Contact" className="hover:underline hover:text-white">
                Contact
              </a>
              <a href="#xxx" className="hover:underline hover:text-white">
                Support
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold uppercase text-white pb-3">Socails</div>
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faFacebookF} /> Facebook
              </a>
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faTiktok} /> TikTok
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold uppercase text-white pb-3">Legal</div>
              <a href="#xxx" className="hover:underline hover:text-white">
                Privacy Policy
              </a>
              <a href="#xxx" className="hover:underline hover:text-white">
                Terms of Use
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
