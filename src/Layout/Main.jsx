// import React from 'react';

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("/login");
  return (
    <div>
      {/* navbar */}
      {noHeaderFooter || <Navbar></Navbar>}
      {/* outlet */}
      <Outlet></Outlet>
      {/* footer */}
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
