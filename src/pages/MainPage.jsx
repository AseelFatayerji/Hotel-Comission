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
        <Hero isMobile={isMobile}/>
      </div>
      <div className="cover-wrapper bg-white rounded-t-[3rem] -mt-[15vh]">
        <div className="section2 z-1">
          <Room isMobile={isMobile}/>
        </div>
        <div className="section3 z-2 overflow-hidden">
          <Testimonials isMobile={isMobile}/>
        </div>
        <div className="section4 z-3">
          <Contact isMobile={isMobile}/>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainPage;
