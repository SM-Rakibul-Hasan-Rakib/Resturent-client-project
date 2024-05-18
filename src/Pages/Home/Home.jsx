// import React from "react";

import SectionOne from "../../Components/SectionOne";
import Banner from "../Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./Popular/PopularMenu";
// import Textone from "../../Components/Textone";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Textone></Textone> */}
      <Category></Category>
      <SectionOne></SectionOne>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
