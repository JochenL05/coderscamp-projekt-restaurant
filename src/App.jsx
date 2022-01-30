import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./views/Homepage/Homepage";
// import Menu from "./views/Menu/Menu";
// import About from "./views/About/About";
// import Reservation from "./views/Reservation/Reservation";
// import ContactPage from "./views/ContactPage/ContactPage";
import { Routes, Route } from "react-router-dom";
import React from "react";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/reservation" element={<Reservation />} /> */}
        {/* <Route path="/contact-page" element={<ContactPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
