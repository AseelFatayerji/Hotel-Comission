import { faFacebook, faFacebookF, faInstagram, faTiktok, faTwitter, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col w-screen rounded-t-[20px] bg-[#87d551] text-neutral-200 px-14 py-4 -mt-25 Poppins">
      <div class="flex flex-row pt-5">
        <div class="flex flex-col gap-2 justify-center w-[35%]">
          <div class="flex items-center w-full gap-4">
            <img
              alt="Land Of Peace Logo"
              src="src\assets\logo.png"
              width="80"
            />
          </div>
          <div class="grid grid-cols-3 gap-6 w-fit p-4 text-2xl">
            <a href="#" class="hover:text-white">
             <FontAwesomeIcon icon={faInstagram} />
            </a>
           <a href="#" class="hover:text-white">
             <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" class="hover:text-white">
             <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
        <div class="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
          <div class="grid grid-cols-2 gap-12">
            <div class="flex flex-col gap-2">
              <div class="font-bold uppercase text-white pb-3">Land Of Peace</div>
              <a href="#Contact" class="hover:underline hover:text-white">
                Contact
              </a>
              <a href="#xxx" class="hover:underline hover:text-white">
                Support
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
          <div class="flex flex-col gap-2">
            <div class="font-bold uppercase text-white pb-3">
              Newsletter
            </div>
            <p class="text-[#e5e7eb] mb-2">Subscribe to our newsletter.</p>
            <form class="flex items-center">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                class="w-[50%] bg-gray-100 text-black rounded-l-lg py-3 px-4 focus:outline-hidden focus:border-transparent"
                autocomplete="off"
                required=""
              />
              <a
                type="submit"
                class="bg-[#3B5388] text-white font-semibold py-3 px-6 rounded-r-lg transition-colors duration-300"
              >
                Subscribe
              </a>
            </form>
          </div>
        </div>
      </div>
      <div class="w-full border-t  border-gray-500 my-8"></div>
      <div class="text-center text-white">© 2026 Land Of Peace - All rights reserved.</div>
    </footer>
  );
}

export default Footer;
