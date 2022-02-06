import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import MenuCard from "./src/components/MenuCard/MenuCard";

const Menu = () => {
  // this should be taken from LocalStorage for now, to mock backend
  const menuItems = [
    {
      id: Math.random(),
      name: "Margherita",
      price: 21,
      //   image:
    },
    {
      id: Math.random(),
      name: "Capriciosa",
      price: 25,
      //   image:
    },
  ];

  return (
    <>
      <Topbar />
      <div>
        <h1>Our Menu</h1>
        <div className="menu">
          {menuItems.map((dish, index) => {
            return <MenuCard key={dish.id + index} dish={dish} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
