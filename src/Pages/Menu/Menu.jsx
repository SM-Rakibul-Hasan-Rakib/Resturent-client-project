import { Helmet } from "react-helmet-async";
import menuImg from "../../assets/menu/Rectangle 1.png";
import imgs from "../../assets/menu/dessert-bg.jpeg";
import drienkd from "../../assets/menu/pexels-kowalievska-1187766.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./menuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu </title>
      </Helmet>

      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert menu items */}
      <h1>Desserts</h1>
      <MenuCategory items={desserts} title="Desert" img={imgs}></MenuCategory>

      {/*  */}
      <h1>pizza</h1>
      <MenuCategory items={pizza} title={pizza} img={pizzaImg}></MenuCategory>
      <h1>salads</h1>
      <MenuCategory items={salad} title={salad} img={saladImg}></MenuCategory>
      <h1>soup</h1>
      <MenuCategory items={soup} title={soup} img={soupImg}></MenuCategory>
      <MenuCategory items={drinks} title={drinks} img={drienkd}></MenuCategory>
    </div>
  );
};

export default Menu;
