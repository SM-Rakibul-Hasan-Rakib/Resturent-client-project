// import React from "react";

import { GoCommandPalette } from "react-icons/go";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/menu">
          Menu <GoCommandPalette></GoCommandPalette>{" "}
        </Link>
      </li>
      <li>
        <Link to="/order">Order</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="fixed z-10 bg-opacity-30 navbar bg-black text-white mx-auto max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content md:flex md:justify-center md:items-center mt-3 z-[1] p-2 shadow  text-center rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" text-white menu menu-horizontal px-1 ">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
