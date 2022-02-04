import React from "react";
import "./App.css";
//import Usersettings from "./views/Usersettings/Usersettings";
import Oldorder from "./views/Oldorder/Oldorder";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Oldorders from "./components/Oldorders/Oldorders";
import Orderlist from "./components/Orderlist/Orderlist";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Oldorder />} />
          <Route path="orders" element={<Oldorders />} />
          <Route path="orders/:orderID" element={<Orderlist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
