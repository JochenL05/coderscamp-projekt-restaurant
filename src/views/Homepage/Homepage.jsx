import React from "react";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import Testimonials from "../../components/Testimonials/Testimonials";
import Description from "../../components/Description/Description";
import Mainview from "../../components/Mainview/Mainview";

const Homepage = () => {
  return (
    <div>
      <Topbar />
      <Mainview />
      <Description />
      <h1>Reviews</h1>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
