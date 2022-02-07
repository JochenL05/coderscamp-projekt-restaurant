import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import MenuCard from "../../components/MenuCard/MenuCard";
import dishes from "../../data/MenuArr";

const Menu = () => {
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  const fetchData = async () => {
    try {
      const stringified = JSON.stringify(dishes);
      localStorage.setItem("menuItems", stringified);
      const menuItems = JSON.parse(localStorage.getItem("menuItems"));
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
