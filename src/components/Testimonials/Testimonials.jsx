import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <Carousel>
      <div>
        <div className="myCarousel">
          <h3 className="myCarousel__person">Person1</h3>
          <h4 className="myCarousel__profession">Profession</h4>
          <p className="myCarousel__description">Nice restaurant</p>
        </div>
      </div>

      <div>
        <div className="myCarousel">
          <h3 className="myCarousel__person">Person2</h3>
          <h4 className="myCarousel__profession">Profession</h4>
          <p className="myCarousel__description">Good food</p>
        </div>
      </div>

      <div>
        <div className="myCarousel">
          <h3 className="myCarousel__person">Person3</h3>
          <h4 className="myCarousel__profession">Profession</h4>
          <p className="myCarousel__description">Great</p>
        </div>
      </div>
    </Carousel>
  );
};

export default Testimonials;
