import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Room from "./Rooms";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Contact from "./Contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MainPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=50%",
          scrub: true,
          pin: ".section1",
          pinSpacing: true,
        },
      });

      tl.fromTo(".section2", { y: "100%" }, { y: "0%" })

        .fromTo(".section3", { x: "100%" }, { x: "0%" })

        .fromTo(".section4", { y: "100%" }, { y: "0%" });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <div ref={containerRef}>
        <div className="section1">
          <Hero />
        </div>

        <div className="section2 z-1 -mt-260">
          <Room />
        </div>

        <div className="section3z-2">
          <Testimonials />
        </div>

        <div className="section4 z-3">
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainPage;
