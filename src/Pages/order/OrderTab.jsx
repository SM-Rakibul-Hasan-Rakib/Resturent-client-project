// import React, { useState } from "react";
// import FoodCard from "../../Components/FoodCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";

// const OrderTab = ({ items }) => {
//   // State to keep track of the current page
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate the number of pages based on the total number of items and items per page
//   const totalPages = Math.ceil(items.length / 6);

//   // Function to handle changing the page
//   const changePage = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   // Pagination configuration
//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   };

//   // Filter items based on the current page
//   const displayedItems = items.slice((currentPage - 1) * 6, currentPage * 6);

//   return (
//     <div>
//       <Swiper
//         pagination={pagination}
//         modules={[Pagination]}
//         className="mySwiper"
//         spaceBetween={40}
//         slidesPerView={6}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         <SwiperSlide>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {displayedItems.map((item) => (
//               <FoodCard key={item._id} item={item} />
//             ))}
//           </div>
//         </SwiperSlide>
//       </Swiper>
//       <div className="pagination-container">
//         {[...Array(totalPages)].map((_, index) => (
//           <button key="paginationButton" onClick={() => changePage(index + 1)}>
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OrderTab;

// // // import React from 'react';

import FoodCard from "../../Components/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  // const displayedItems = items.slice((currentPage - 1) * 6, currentPage * 6);

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
            {items.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}{" "}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;
