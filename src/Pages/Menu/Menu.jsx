import { Helmet } from "react-helmet-async";
import menuImg from "../../assets/menu/Rectangle 1.png";
import img1 from "../../assets/menu/dessert-bg.jpeg";
import Cover from "../../Shared/Cover/Cover";
import PopularMenu from "../../Pages/Home/Popular/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu </title>
      </Helmet>

      <Cover img={menuImg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>

      <Cover img={img1} title="Our Menu">
        {/* <img src={menuImg} alt="" /> */}
      </Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="Our Menu">
        {/* <img src={menuImg} alt="" /> */}
      </Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
