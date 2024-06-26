// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  // console.log(menu);

  // const [menues, serMenues] = useState();

  // Correctly filter the menu items and store them in the 'popular' variable
  const popular = menu.filter((item) => item.category === "popular");

  // Return the JSX here, after defining 'popular'
  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center my-8">
        <button className="relative  flex my-8  items-center justify-center  border-b-4 border-0 p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white">View full menu</span>
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;

// // import React from 'react';

// import { useEffect, useState } from "react";
// import SectionTitle from "../../../Components/SectionTitle";
// import MenuItem from "../../../Shared/MenuItem/MenuItem";
// import useMenu from "../../../hooks/useMenu";

// const PopularMenu = () => {
//   const [menu] = useMenu();

//   const popular = menu
//     .filter((item) => item.category === "popular")

//     .return(
//       <section className="mb-12">
//         <SectionTitle
//           heading="From Our Menu"
//           subHeading="Popular Items"
//         ></SectionTitle>
//         <div className="grid md:grid-cols-2 gap-10">
//           {popular.map((item) => (
//             <MenuItem key={item._id} item={item}></MenuItem>
//           ))}
//         </div>
//         <div className="flex justify-center items-center my-8">
//           <button className="relative  flex my-8  items-center justify-center  border-b-4 border-0 p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
//             <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
//             <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
//             <span className="relative text-white">View full menu</span>
//           </button>
//         </div>
//       </section>
//     );
// };

// export default PopularMenu;
