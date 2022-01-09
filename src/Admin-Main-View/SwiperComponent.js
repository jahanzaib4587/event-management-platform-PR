import React, { useState } from "react";
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
// import "swiper/scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/thumbs/thumbs.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

import "../App.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper";
import { componentStyles } from "./styles";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);
const SwiperComponent = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const Data = [
    "./Videos/video.mp4",
    "./Videos/video3.mp4",
    "./Videos/video2.mp4",
  ];
  return (
    <div style={componentStyles.swiperContainer}>
      <Swiper
        style={componentStyles.swiperImageContainer}
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        {Data.map((value, index) => {
          return (
            <SwiperSlide>
              <video autoPlay loop muted>
                <source src={value} type="video/mp4" />
              </video>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {Data.map((value, index) => {
          return (
            <SwiperSlide>
              <video>
                <source src={value} type="video/mp4" />
              </video>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
