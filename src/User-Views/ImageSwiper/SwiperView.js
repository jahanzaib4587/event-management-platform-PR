import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);
const sliderData = [
  "./Images/image1.jpeg",
  "./Images/image2.jpeg",
  "./Images/image3.jpeg",
  "./Images/image4.jpg",
  "./Images/image5.jpg",
  "./Images/image3.jpeg",
  "./Images/image1.jpeg",
  "./Images/image2.jpeg",
  "./Images/image3.jpeg",
  "./Images/image4.jpg",
  "./Images/image5.jpg",
];
export default function App() {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        // centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="swiperMarketing"
      >
        {sliderData.map((data, index) => {
          return (
            <SwiperSlide>
              <img src={data}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
