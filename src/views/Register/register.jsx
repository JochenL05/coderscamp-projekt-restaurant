import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import FormSuccess from "../../components/RegistrationForm/FormSuccess";

export default function register() {
  const [formIsSubmit, setFormIsSubmit] = useState(false);

  const submitForm = (data) => {
    const currentUserLoginDetails = localStorage.getItem("usersLoginDetails");
    if (currentUserLoginDetails) {
      localStorage.setItem(
        "usersLoginDetails",
        `${JSON.stringify([...currentUserLoginDetails, data])}`
      );
    } else {
      localStorage.setItem("usersLoginDetails", `${JSON.stringify([data])}`);
    }
    setFormIsSubmit(true);
  };
  return (
    <div>
      <Topbar />
      <div>
        {!formIsSubmit ? (
          <RegistrationForm submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
      <Footer />
    </div>
  );
}
