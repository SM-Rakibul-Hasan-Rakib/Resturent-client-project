// import React from "react";

import { useContext } from "react";
import { GoCommandPalette } from "react-icons/go";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import { FaShoppingCart } from "react-icons/fa";
import useCarts from "../../hooks/useCarts";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCarts();
  console.log(cart);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navLink = (
    <>
      <div className="text-black flex justify-center items-center flex-row  md:flex-row">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>

        <li>
          <Link to="/menu">
            Menu <GoCommandPalette></GoCommandPalette>{" "}
          </Link>
        </li>
        <li>
          <Link to={"/order/salad"}>Order</Link>
        </li>
        <li>
          <Link to="/dashboard/cart">
            <button className="btn">
              <FaShoppingCart className="mr-4"></FaShoppingCart>
              <div className="badge badge-secondary">+0{cart.length}</div>
            </button>
          </Link>
        </li>
        {/* <li>
          <Link to="/login">Login</Link>
        </li> */}
        {user ? (
          <>
            {/* <span>{user.displayName}</span> */}
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </div>
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
          {user && (
            <div
              data-tip={user.displayName}
              className="tooltip tooltip-bottom avatar"
            >
              <div className="w-14 mr-2 rounded-full ring ring-primary ring-offset-bam run devse-100 ring-offset-2">
                <img src={user && user.photoURL}></img>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
