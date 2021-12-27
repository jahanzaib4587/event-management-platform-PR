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
  "./Videos/video.mp4",
  "./Videos/video1.mp4",
  "./Videos/video2.mp4",
  "./Videos/video3.mp4",
  "./Videos/video.mp4",
  "./Videos/video2.mp4",
];
export default function App() {
  return (
    <div>
      <Swiper pagination={true} className="mySwiper">
        {sliderData.map((data, index) => {
          return (
            <SwiperSlide style={{ height: "100px" }}>
              {/* <video autoPlay loop muted>
                <source src={data} type="video/mp4" />
              </video> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
