import React from "react";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import Changepersonaldata from "../../components/ChangePersonalData/ChangePersonalData";

const Usersettings = () => {
  return (
    <div>
      <Topbar />
      <h1>User settings</h1>
      <Changepersonaldata />
      <Footer />
    </div>
  );
};

export default Usersettings;
