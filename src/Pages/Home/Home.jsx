// import React from "react";

import SectionOne from "../../Components/SectionOne";
import Banner from "../Banner/Banner";
import Category from "./Category/Category";
// import Textone from "../../Components/Textone";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Textone></Textone> */}
      <Category></Category>
      <SectionOne></SectionOne>
    </div>
  );
};

export default Home;
