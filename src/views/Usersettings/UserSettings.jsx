import React from "react";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import Changepersonaldata from "../../components/Changepersonaldata/Changepersonaldata";

const UserSettings = () => {
  return (
    <div>
      <Topbar />
      <h1>User settings</h1>
      <Changepersonaldata />
      <Footer />
    </div>
  );
};

export default UserSettings;
