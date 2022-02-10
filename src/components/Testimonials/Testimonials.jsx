import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <Carousel>
      <div>
        <div className="myCarousel">
          <h3 className="myCarousel__person">Bartosz Nowak</h3>
          <h4 className="myCarousel__profession">Student</h4>
          <p className="myCarousel__description">
            I love the pizza here! I order here pizza every week and it is
            always delicious!{" "}
          </p>
        </div>
      </div>

      <div>
        <div className="myCarousel">
          <h3 className="myCarousel__person">Anna Kowalska</h3>
          <h4 className="myCarousel__profession">Lawyer</h4>
          <p className="myCarousel__description">Great pizza!</p>
        </div>
      </div>

      <div>
        <div className="myCarousel">
          <h3 className="myCarousel__person">Laura Smith</h3>
          <h4 className="myCarousel__profession">Accounter</h4>
          <p className="myCarousel__description">
            The best restaurant in the city!
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default Testimonials;
