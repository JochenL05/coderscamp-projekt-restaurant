import React from "react";
import ContactForm from "../contactForm/ContactForm";
import "./contactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact">
      <div className="contact_info">
        <h2 className="contact_info-header">Location</h2>
        <div className="contact_info-piece">
          <i className="locationIcon fas fa-location-arrow"></i>
          <p>Stary Rynek 37, Poznań</p>
        </div>
        <div className="contact_info-piece">
          <i className="locationIcon fas fa-phone-alt"></i>
          <p>+48 123 456 789</p>
        </div>
        <div className="contact_info-piece">
          <i className="locationIcon fas fa-envelope"></i>
          <p>poznan.restaurant@restaurant.com</p>
        </div>
      </div>
      <div className="contact_form">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactInfo;
