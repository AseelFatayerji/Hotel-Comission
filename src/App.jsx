import "./css/App.css";
import Booking from "./pages/Booking";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Room/:room_name" element={<Booking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
