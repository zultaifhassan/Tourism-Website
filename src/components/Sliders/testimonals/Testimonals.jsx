import React from "react";
import "./testimonal.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { CiLocationOn } from "react-icons/ci";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Testimonals = () => {
  return (
    <div className="testimonal-outer-div">
      <div className="testimonal-inner-div">
        <div className="testimonal-text">
          <h1>
            See What Our Clients Say <br /> About Us
          </h1>
          <p>
            We've got the best place in the world for you to explore and relax.
          </p>
        </div>
        <div className="swiper-boxes">
          <Swiper
            slidesPerView={2}
            spaceBetween={40}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper">
            <SwiperSlide>
              <div className="testimonals-boxes">
                <div className="user-img-name">
                  <img src="/Images/slider/user.jpg" alt="" />
                  <div className="user-location">
                    <h2>Zultaif Hassan</h2>
                    <span>
                      <CiLocationOn />
                      <h3>Indonesia</h3>
                    </span>
                  </div>
                </div>
                <p>
                  "This is the best place I've ever been. I've always loved
                  traveling, but I've never been to Karakoram Safari. I
                  absolutely adore the creativity and the wonderful views. I
                  highly recommend it!"
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonals-boxes">
                <div className="user-img-name">
                  <img src="/Images/slider/user.jpg" alt="" />
                  <div className="user-location">
                    <h2>Zultaif Hassan</h2>
                    <span>
                      <CiLocationOn />
                      <h3>Indonesia</h3>
                    </span>
                  </div>
                </div>
                <p>
                  "This is the best place I've ever been. I've always loved
                  traveling, but I've never been to Karakoram Safari. I
                  absolutely adore the creativity and the wonderful views. I
                  highly recommend it!"
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonals-boxes">
                <div className="user-img-name">
                  <img src="/Images/slider/user.jpg" alt="" />
                  <div className="user-location">
                    <h2>James Smith</h2>
                    <span>
                      <CiLocationOn />
                      <h3>Indonesia</h3>
                    </span>
                  </div>
                </div>
                <p>
                  "This is the best place I've ever been. I've always loved
                  traveling, but I've never been to Karakoram Safari. I
                  absolutely adore the creativity and the wonderful views. I
                  highly recommend it!"
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonals-boxes">
                <div className="user-img-name">
                  <img src="/Images/slider/user.jpg" alt="" />
                  <div className="user-location">
                    <h2>James Smith</h2>
                    <span>
                      <CiLocationOn />
                      <h3>Indonesia</h3>
                    </span>
                  </div>
                </div>
                <p>
                  "This is the best place I've ever been. I've always loved
                  traveling, but I've never been to Karakoram Safari. I
                  absolutely adore the creativity and the wonderful views. I
                  highly recommend it!"
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
