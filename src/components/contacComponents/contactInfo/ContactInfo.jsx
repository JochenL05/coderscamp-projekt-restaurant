import React from "react";
import ContactForm from "../contactForm/ContactForm";
import "./contactInfo.css";

export default function ContactInfo() {
  return (
    <div className="container">
      <div className="left-wraper">
        <div className="left">
          <div className="sectionTitle">Location</div>
          <div className="locationItems">
            <div className="location">
              <i className="locationIcon fas fa-location-arrow"></i>
              Stary Rynek 37, Poznań
            </div>
            <div className="location">
              <i className="locationIcon fas fa-phone-alt"></i>
              +48 123 456 789
            </div>
            <div className="location">
              <i className="locationIcon fas fa-envelope"></i>
              poznan.restaurant@restaurant.com
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <ContactForm />
      </div>
    </div>
  );
}
