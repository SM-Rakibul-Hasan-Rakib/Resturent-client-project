// import React from "react";

import { Helmet } from "react-helmet-async";
import SectionOne from "../../Components/SectionOne";
import Banner from "../Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./Popular/PopularMenu";
import Review from "./Review/Review";
// import Textone from "../../Components/Textone";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu </title>
      </Helmet>
      <Banner></Banner>
      {/* <Textone></Textone> */}
      <Category></Category>
      <SectionOne></SectionOne>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Review></Review>
    </div>
  );
};

export default Home;
