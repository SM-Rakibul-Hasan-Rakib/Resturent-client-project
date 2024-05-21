// import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "../../../Components/SectionTitle";
import { useEffect, useState } from "react";
import { MdOutlineRateReview } from "react-icons/md";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="my-20">
      <SectionTitle
        subHeading="What Our Client say"
        heading="Testmonials"
      ></SectionTitle>

      {/* swipper start */}

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {review.map((reviews) => (
          <SwiperSlide key={reviews._id} reviews={reviews}>
            <div className="mx-24 text-center my-16 fex flex-col bg-slate-100 items-center justify-center">
              {/* rating components start */}

              <div className="pt-5 flex justify-center items-center">
                <div className="rating rating-md">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-yellow-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                </div>

                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
                  4.95
                </p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:byellbg-yellow-400"></span>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                >
                  73 reviews
                </a>
              </div>
              <p className="text-5xl flex items-center mt-7 justify-center text-center">
                <MdOutlineRateReview></MdOutlineRateReview>
              </p>
              {/* rating components end */}
              <p className="py-8 p-3">{reviews.details}</p>

              <h3 className="text-2xl pb-5 text-yellbg-yellow-400">
                {reviews.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
