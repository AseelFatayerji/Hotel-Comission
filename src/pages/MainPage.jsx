import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Room from "./Rooms";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Contact from "./Contact";

function MainPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Room />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainPage;
