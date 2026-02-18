import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col w-screen rounded-t-[20px] bg-[#87d551] text-neutral-200 px-14 -mt-25 Poppins">
      <div class="flex flex-row pt-5">
        <div class="flex flex-col gap-2 justify-start w-[35%]">
          <img alt="Land Of Peace Logo" src="src\assets\logo.png" width="80" />
        </div>
        <div class="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
          <div class="grid grid-cols-3 gap-12">
            <div class="flex flex-col gap-2">
              <div class="font-bold uppercase text-white pb-3">
                Land Of Peace
              </div>
              <a href="#Contact" class="hover:underline hover:text-white">
                Contact
              </a>
              <a href="#xxx" class="hover:underline hover:text-white">
                Support
              </a>
            </div>
            <div class="flex flex-col gap-2">
              <div class="font-bold uppercase text-white pb-3">Socails</div>
              <a href="#" class="hover:text-white">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
              <a href="#" class="hover:text-white">
                <FontAwesomeIcon icon={faFacebookF} /> Facebook
              </a>
              <a href="#" class="hover:text-white">
                <FontAwesomeIcon icon={faTiktok} /> TikTok
              </a>
            </div>
            <div class="flex flex-col gap-2">
              <div class="font-bold uppercase text-white pb-3">Legal</div>
              <a href="#xxx" class="hover:underline hover:text-white">
                Privacy Policy
              </a>
              <a href="#xxx" class="hover:underline hover:text-white">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full border-t  border-gray-500 my-8"></div>
      <div class="text-center text-white">
        © 2026 Land Of Peace - All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
