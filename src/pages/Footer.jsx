import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 810px)" });
  return (
    <footer className="flex flex-col w-screen px-4 py-2 rounded-t-[20px] bg-[#87d551] text-neutral-200 Poppins md:px-10">
      <div className="flex flex-row pt-3">
        <div className="flex justify-start h-20 w-20 pr-3 md:w-[35%] ">
          <img alt="Land Of Peace Logo" src="https://ik.imagekit.io/sas2seqly/LopInn/logo.png?updatedAt=1773022427960" className="h-15 w-15 md:h-20 md:w-20" />
        </div>
        <div className="flex w-[65%] justify-end text-nowrap text-sm md:text-lg">
          <div className="grid grid-cols-3 gap-16 md:gap-8">
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
      <div className="w-full border-t  border-gray-500 my-4 md:my-8" />
      <div className="text-center text-sm text-white">
        © 2026 Land Of Peace - All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
