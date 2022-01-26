import React from "react";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";
import Changepersonaldata from "../../components/Changepersonaldata/Changepersonaldata";
import Oldorders from "../../components/Oldorders/Oldorders";

const Usersettings = () => {
  return (
    <div>
      <Topbar />
      <h1>User settings</h1>
      <Changepersonaldata />
      <Oldorders />
      <Footer />
    </div>
  );
};

export default Usersettings;
