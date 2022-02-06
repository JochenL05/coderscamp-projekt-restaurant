import React from "react";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import ChangePersonalData from "../../components/Changepersonaldata/ChangePersonalData";

const UserSettings = () => {
  return (
    <div>
      <Topbar />
      <h1>User settings</h1>
      <ChangePersonalData />
      <Footer />
    </div>
  );
};

export default UserSettings;
