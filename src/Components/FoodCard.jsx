// import React from 'react';

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
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
            <button className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
