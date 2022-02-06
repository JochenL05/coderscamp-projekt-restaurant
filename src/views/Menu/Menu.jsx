import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import MenuCard from "../../components/MenuCard/MenuCard";
import "./Menu.css";

const Menu = () => {
  const dishes = [
    {
      id: Math.random(),
      name: "Margherita",
      price: 21,
      description: "",
      //image:
    },
    {
      id: Math.random(),
      name: "Capriciosa",
      price: 25,
      //   image:
    },
    {
      id: Math.random(),
      name: "Capriciosa",
      price: 25,
      //   image:
    },
    {
      id: Math.random(),
      name: "Capriciosa",
      price: 25,
      //   image:
    },
    {
      id: Math.random(),
      name: "Capriciosa",
      price: 25,
      //   image:
    },
    {
      id: Math.random(),
      name: "Capriciosa",
      price: 25,
      //   image:
    },
  ];

  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  const fetchData = async () => {
    try {
      const stringified = JSON.stringify(dishes);
      localStorage.setItem("menuItems", stringified);
      const menuItems = JSON.parse(localStorage.getItem("menuItems"));
      console.log(menuItems);
      setItemsToDisplay(menuItems);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Topbar />
      <div>
        <h1>Our Menu</h1>
        <div className="menu">
          {itemsToDisplay.length > 0 ? (
            itemsToDisplay.map((dish, index) => {
              return <MenuCard key={dish.id + index} dish={dish} />;
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Menu;
