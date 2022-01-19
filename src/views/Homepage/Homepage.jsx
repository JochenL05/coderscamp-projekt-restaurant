import React from "react";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import Testimonials from "../../components/Testimonials/Testimonials";
import Description from "../../components/Description/Description";

const Homepage = () => {
  return (
    <div>
      <Topbar />
      <Description />
      <h1>Testimonials</h1>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
