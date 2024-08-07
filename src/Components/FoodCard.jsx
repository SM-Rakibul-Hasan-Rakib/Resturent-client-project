// import React from 'react';
// import axios from "axios";
// import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxious from "../hooks/useAxious";
import Swal from "sweetalert2";
import useCarts from "../hooks/useCarts";
// import { Axios } from "axios";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiousSecoure = useAxious();
  const [, refetch] = useCarts();

  const handleAddToFoodCart = (item) => {
    if (user && user.email) {
      // console.log(user.email, food);
      const { name, image, price, recipe, _id } = item;
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiousSecoure
        .post("http://localhost:5000/carts", cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name}added to your cart`,
              showConfirmButton: false,
              timer: 1500,
            });
            // refetch the cart item
            refetch();
          }
        });
      // TODO: send cart item to the database
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
          //send the used login page
        }
      });
    }
  };
  return (
    <div>
      <div className="card my-12 h-[500px] bg-base-100  shadow-xl  ">
        <figure>
          <img className="w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title text-center">{name}</h2>
          <p>{recipe}</p>
          <p className="font-bold text-orange-500">{price}$</p>
          <div className="card-actions Ptjustify-center my-3">
            <button
              onClick={() => handleAddToFoodCart(item)}
              className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
