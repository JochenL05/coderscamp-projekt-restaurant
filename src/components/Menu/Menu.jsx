import React from "react";
import { Item } from "./Item.jsx";
import Pepperoni from "../../img/Pizzas/Pepperoni.jpg";
import Slayer from "../../img/Pizzas/slayerpizza.jpg";
import Alonepizza from "../../img/Pizzas/Alonepizza.jpg";
import Kiwi from "../../img/Pizzas/kiwi.jpg";
import Unicorn from "../../img/Pizzas/unicorn.jpg";
import Potato from "../../img/Pizzas/Potato.jpg";
import Topbar from "./src/components/Topbar/Topbar";
import Footer from "./src/components/Footer/Footer";

const Menu = ({ name, desc }) => {
  return (
    <div>
      <Topbar />
      <section className="features-boxed">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">{name}</h2>
            <p className="text-center">{desc}</p>
          </div>
          <div className="row justify-content-center features">
            <Item
              name="Pepperoni"
              desc="Flour, Tomato Sauce, Pepperoni, Mozzarella. Standard for: I don't know what do i want."
              price={10.0}
              img={Pepperoni}
            />
            <Item
              name="Slayer"
              desc="Flour & Some spicy stuff. Our chiefs are scary of making this one so keep in mind that they will probably burn it."
              price={6.66}
              img={Slayer}
            />
            <Item
              name="Sweet Home Pineapple"
              desc="Your partner will sit in front of you, looking at you with open mouth, probably being disgusted BUT all of this for a moment in silence with your pizza!"
              price={11.0}
              img={Alonepizza}
            />
            <Item
              name="Kiwi"
              desc="Kinda yeah, we can do this one, but... please don't."
              price={100.0}
              img={Kiwi}
            />
            <Item
              name="Unicorn"
              desc="Flour, Tomato Sauce and lots of cheeses. I'm to lazy to think about description for this one. Just get this for kids. Yeah for kids."
              price={17.7}
              img={Unicorn}
            />
            <Item
              name="Potato"
              desc="Flour, Tomato Sauce, Potato, Mozzarella. When u can't decide to eat pizza or some house dinner. Why don't have both?"
              price={12.0}
              img={Potato}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Menu;
