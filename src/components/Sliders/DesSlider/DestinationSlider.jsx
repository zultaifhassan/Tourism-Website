import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CiLocationOn } from "react-icons/ci";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Des.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const DestinationSlider = () => {
  return (
    <div className="destination-slider">
      <div className="destination-text">
        <h1>
          Explore new worlds with <br /> exotic natural scenery
        </h1>
        <p>Explore the world with what you love beautiful natural beauty.</p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <img src="/Images/home/dp1.png" alt="" />
          <div className="sl-place-detail">
            <div className="icon-address">
              <CiLocationOn />
              <span>
                <h2>Bali,</h2>
                <h3>Indonasia</h3>
              </span>
            </div>
            <p>Bali is a beautiful tourist spot and is visited by many travelers. </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/home/dp2.png" alt="" />
          <div className="sl-place-detail">
            <div className="icon-address">
              <CiLocationOn />
              <span>
                <h2>Bali,</h2>
                <h3>Indonasia</h3>
              </span>
            </div>
            <p>Bali is a beautiful tourist spot and is visited by many travelers. </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/home/dp3.png" alt="" />
          <div className="sl-place-detail">
            <div className="icon-address">
              <CiLocationOn />
              <span>
                <h2>Bali,</h2>
                <h3>Indonasia</h3>
              </span>
            </div>
            <p>Bali is a beautiful tourist spot and is visited by many travelers. </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/home/dp1.png" alt="" />
          <div className="sl-place-detail">
            <div className="icon-address">
              <CiLocationOn />
              <span>
                <h2>Bali,</h2>
                <h3>Indonasia</h3>
              </span>
            </div>
            <p>Bali is a beautiful tourist spot and is visited by many travelers. </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/home/dp2.png" alt="" />
          <div className="sl-place-detail">
            <div className="icon-address">
              <CiLocationOn />
              <span>
                <h2>Bali,</h2>
                <h3>Indonasia</h3>
              </span>
            </div>
            <p>Bali is a beautiful tourist spot and is visited by many travelers. </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/home/dp3.png" alt="" />
          <div className="sl-place-detail">
            <div className="icon-address">
              <CiLocationOn />
              <span>
                <h2>Bali,</h2>
                <h3>Indonasia</h3>
              </span>
            </div>
            <p>Bali is a beautiful tourist spot and is visited by many travelers. </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DestinationSlider;
