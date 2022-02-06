import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
//import Usersettings from "./views/Usersettings/Usersettings";
import Homepage from "./views/Homepage/Homepage";
import ContactPage from "./views/ContactPage/ContactPage";
import LoginPage from "./views/LoginPage/LoginPage";
import Reservations from "./views/Reservations/Reservations.jsx";
import OldOrders from "./views/OldOrders/OldOrders";
import OldOrderDetails from "./components/OldOrderDetails/OldOrderDetails";
import Register from "./views/Register/register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="orders" element={<OldOrders />} />
          <Route path="orders/:orderID" element={<OldOrderDetails />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
