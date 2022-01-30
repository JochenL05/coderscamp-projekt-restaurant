import ContactInfo from "../../components/contacComponents/contactInfo/ContactInfo";
import ContactSection from "../../components/contacComponents/contactSection/ContactSection";
import MapContainer from "../../components/contacComponents/googleMap/GoogleMap";
import Topbar from "../../components/Topbar/Topbar";
import "./contactPage.css";
import React from "react";

export default function ContactPage() {
  return (
    <div>
      <Topbar />
      <ContactSection />
      <ContactInfo />
      <MapContainer />
    </div>
  );
}
