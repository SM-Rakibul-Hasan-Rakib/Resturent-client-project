// import React from 'react';
import featuredImg from "../../../assets/home/featured.jpg";

import SectionTitle from "../../../Components/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-10">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex bg-slate-500 bg-opacity-60 px-16">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 text-white">
          <p>Aug 20,2029</p>
          <p className="uppercase text-white">Where can i get some?</p>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eius
            facilis quae quidem asperiores, minus incidunt. Ad veritatis
            laboriosam accusantium inventore. Iusto sed, accusamus nisi autem
            possimus voluptate numquam! Ducimus soluta modi iste. Iusto, fugiat
            quidem, beatae facere sed doloribus, nesciunt tenetur voluptatum
            magnam vitae vero id nisi! Vel, id.
          </p>
          {/* button */}
          <button className="relative inline-flex items-center justify-center border-b-4 border-0 p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white">Order Now</span>
          </button>
          {/* buttom */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
