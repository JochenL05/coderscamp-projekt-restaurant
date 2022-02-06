import GoogleMap from "../../components/contacComponents/googleMap/GoogleMap";
import Topbar from "../../components/Topbar/Topbar";
import ContactInfo from "../../components/contacComponents/contactInfo/ContactInfo";
import Header from "../../components/Header/Header";
import React from "react";
import Footer from "../../components/Footer/Footer";
import "./contactPage.css";
export default function ContactPage() {
  return (
    <div className="body">
      <Topbar />
      <Header title="CONTACT" />
      <ContactInfo />
      <GoogleMap />
      <Footer />
    </div>
  );
}
