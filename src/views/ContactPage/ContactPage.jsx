import ContactInfo from "../../components/contacComponents/contactInfo/ContactInfo";
import GoogleMap from "../../components/contacComponents/googleMap/GoogleMap";
import Topbar from "../../components/Topbar/Topbar";
import Header from "../../components/Header/Header";
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
