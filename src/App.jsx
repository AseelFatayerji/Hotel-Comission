import "./App.css";
import Navbar from "./components/Navbar";
import Booking from "./pages/Booking";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Room from "./pages/Rooms";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Room />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
