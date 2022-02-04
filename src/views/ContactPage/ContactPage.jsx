import ContactInfo from "./src/components/contacComponents/contactInfo/ContactInfo";
import GoogleMap from "../../components/contacComponents/googleMap/GoogleMap";
import Topbar from "../../components/Topbar/Topbar";
import React from "react";
import Header from "../../components/Header/Header";

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
