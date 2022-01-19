import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel>
        <div>
          {/*<img src="" />*/}
          <div className="myCarousel">
            <h3>Person1</h3>
            <h4>Profession</h4>
            <p>Nice restaurant</p>
          </div>
        </div>

        <div>
          {/*<img src="" />*/}
          <div className="myCarousel">
            <h3>Person2</h3>
            <h4>Profession</h4>
            <p>Good food</p>
          </div>
        </div>

        <div>
          {/*<img src="" />*/}
          <div className="myCarousel">
            <h3>Person3</h3>
            <h4>Profession</h4>
            <p>Great</p>
          </div>
        </div>
      </Carousel>
    );
  }
}
