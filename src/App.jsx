import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import UserSettings from "./views/Usersettings/UserSettings";
import Homepage from "./views/Homepage/Homepage";
import ContactPage from "./views/ContactPage/ContactPage";
import LoginPage from "./views/LoginPage/LoginPage";
import Reservations from "./views/Reservations/Reservations";
import OldOrders from "./views/OldOrders/OldOrders";
import OldOrderDetails from "./components/OldOrderDetails/OldOrderDetails";

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
          <Route path="settings" element={<UserSettings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
