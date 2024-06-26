// import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
// import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// img swiper start
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle";
// img swiper end

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-7 mb-24"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h3 className="uppercase text-white shadow-xl text-center text-3xl font-semibold -mt-14">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h3 className="uppercase text-white shadow-xl text-center text-3xl font-semibold -mt-14">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h3 className="uppercase text-white shadow-xl text-center text-3xl font-semibold -mt-14">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h3 className="uppercase text-white shadow-xl text-center text-3xl font-semibold -mt-14">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h3 className="uppercase text-white shadow-xl text-center text-3xl font-semibold -mt-14">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
