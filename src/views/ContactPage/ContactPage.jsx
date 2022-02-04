import ContactInfo from "../../components/ContacComponents/ContactInfo/ContactInfo";
import GoogleMap from "../../components/ContacComponents/GoogleMap/GoogleMap";
import Topbar from "../../components/Topbar/Topbar";
import "./contactPage.css";
import React from "react";

export default function ContactPage() {
  return (
    <div>
      <Topbar />
      <Header title="CONTACT" />
      <ContactInfo />
      <GoogleMap />
    </div>
  );
}
