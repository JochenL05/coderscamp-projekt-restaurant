import "./App.css";
import Homepage from "./views/Homepage/Homepage";
//import ContactPage from "./views/ContactPage/ContactPage";
import React from "react";
import LoginPage from "./views/LoginPage/LoginPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Reservations from "./views/Reservations/Reservations";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="loginpage" element={<LoginPage />} />
          {/*}          <Route path="contactpage" element={<ContactPage />} /> */}
          <Route path="Reservations" element={<Reservations />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
