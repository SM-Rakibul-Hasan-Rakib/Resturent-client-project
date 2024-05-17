// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      {/* outlet */}
      <Outlet></Outlet>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
