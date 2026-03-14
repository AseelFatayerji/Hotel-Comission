import { useDispatch } from "react-redux";
import { fetchRooms } from "./Redux/Reducer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Booking from "./pages/Booking";
import MainPage from "./pages/MainPage";
import ScrollToTop from "./components/ScrollReset";

import "./css/App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Room/:room_name" element={<Booking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
