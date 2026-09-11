import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Room from "./Rooms";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Contact from "./Contact";

import { db } from "../firebase";
import { ref, onValue, off } from "firebase/database";
import { useEffect, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

function MainPage() {
  const isMobile = useMediaQuery({ query: "(max-width: 850px)" });
  return (
    <>
      <Navbar />
      <div className="section1">
        <Hero isMobile={isMobile} />
      </div>
      <div className="cover-wrapper bg-white ">
        <div className="section2">
          <Room isMobile={isMobile} />
        </div>
        <div className="section3 overflow-hidden">
          <Testimonials isMobile={isMobile} />
        </div>
        <div className="section4 ">
          <Contact isMobile={isMobile} />
          <div className="bg-[#3B5388]"><Footer /></div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
