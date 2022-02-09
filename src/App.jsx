import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
//import Usersettings from "./views/Usersettings/Usersettings";
// import Context from "./context/Context";
import Homepage from "./views/Homepage/Homepage";
import ContactPage from "./views/ContactPage/ContactPage";
import LoginPage from "./views/LoginPage/LoginPage";
import Reservations from "./views/Reservations/Reservations";
import OldOrders from "./views/OldOrders/OldOrders";
import OldOrderDetails from "./components/OldOrderDetails/OldOrderDetails";
import Register from "./views/Register/register";
import Menu from "./views/Menu/Menu";
import Cart from "./views/Cart/Cart";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="reservations" element={<Reservations />} />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <OldOrders />
              </ProtectedRoute>
            }
          />
          <Route path="orders/:orderID" element={<OldOrderDetails />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={"404 NOT FOUND"} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
