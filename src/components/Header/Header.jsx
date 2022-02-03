import React from "react";
import "./header.css";

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  return <h1 className="header">{props.title}</h1>;
};

export default Header;
