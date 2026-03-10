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

gsap.registerPlugin(ScrollTrigger);

function MainPage() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const roomsRef = ref(db, "Suites");
    onValue(roomsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const rooms = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));
        setRooms(rooms);
      }
    });
    return () => off(roomsRef);
  }, []);
  return (
    <>
      <Navbar />
      <div className="section1">
        <Hero rooms={rooms} />
      </div>
      <div className="cover-wrapper bg-white rounded-t-[3rem] -mt-[15vh]">
        <div className="section2 z-1">
          <Room rooms={rooms} />
        </div>
        <div className="section3 z-2 overflow-hidden">
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
