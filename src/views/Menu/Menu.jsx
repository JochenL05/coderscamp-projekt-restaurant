import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import MenuCard from "../../components/MenuCard/MenuCard";
import "./Menu.css";

const Menu = () => {
  const dishes = [
    {
      id: 1,
      name: "Margherita",
      price: 21,
      description: "",
      qty: 0,
      //imageUrl: `${pepperoni}`,
    },
    {
      id: 2,
      name: "Capriciosa",
      price: 25,
      qty: 0,
      //   image:
    },
    {
      id: 3,
      name: "Salame",
      price: 25,
      qty: 0,
      //   image:
    },
    {
      id: 4,
      name: "Vegetables",
      price: 25,
      qty: 0,
      //   image:
    },
    {
      id: 5,
      name: "Four cheeses",
      price: 25,
      qty: 0,
      //   image:
    },
    {
      id: 6,
      name: "Rucola",
      price: 25,
      qty: 0,
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
              return (
                <>
                  <MenuCard key={dish.id + index} dish={dish} />
                </>
              );
            })
          ) : (
            <div>Cart is empty</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Menu;
