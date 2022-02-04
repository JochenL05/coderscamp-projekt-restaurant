import React from "react";
import "./App.css";
import Homepage from "./views/Homepage/Homepage";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Homepage />
      <Menu name="Pizza" desc="Best pizza ever" />
    </div>
  );
}

export default App;
