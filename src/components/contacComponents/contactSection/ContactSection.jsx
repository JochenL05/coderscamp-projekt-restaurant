import "./contactSection.css";
import React from "react";

export default function ContactSection() {
  return (
    <div className="contactSection">
      <div className="titleSide">CONTACT</div>
      <div className="wraper">
        <div className="left">
          <span className="contactTitle">Location</span>
        </div>
        <div className="right">
          <span className="contactTitle">Get in touch</span>
        </div>
      </div>
    </div>
  );
}
