import React from "react";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import { BrowserRouter as Router } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Router>
        <Topbar />
      </Router>
      <Footer />
    </div>
  );
};

export default Homepage;
