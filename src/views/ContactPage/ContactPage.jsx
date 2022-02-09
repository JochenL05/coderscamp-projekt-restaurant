import GoogleMap from "../../components/ContacComponents/GoogleMap/GoogleMap";
import Topbar from "../../components/Topbar/Topbar";
import ContactInfo from "../../components/ContacComponents/ContactInfo/ContactInfo";
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
