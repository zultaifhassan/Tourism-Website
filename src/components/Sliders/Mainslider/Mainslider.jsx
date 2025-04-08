import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './mainslider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className='main-slider'>
      <div className="home-main-first">
        <div className='slider-inner-text'>

        <h1>Welcome to <br />Karakoram Safari</h1>
        <p>Discover the hidden gems of World!</p>
        <button>Discover Now</button>
        </div>
      </div>
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
        <SwiperSlide><img src='/Images/home/main.png' alt='' /></SwiperSlide>
        <SwiperSlide><img src='/Images/home/pic1.jpg' alt='' /></SwiperSlide>
        <SwiperSlide><img src='/Images/home/pic2.jpg' alt='' /></SwiperSlide>
        <SwiperSlide><img src='/Images/home/pic3.jpg' alt='' /></SwiperSlide>
      </Swiper>
    </div>
  );
}
