import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero.jsx";
import Booking from "./pages/Booking.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/Room/?" element={<Booking />} />
    </Routes>
  </Router>,
);
