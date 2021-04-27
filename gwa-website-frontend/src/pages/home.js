import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import exterior1 from "../assets/exterior/frontBuilding.JPG";
import exterior2 from "../assets/exterior/frontBuilding2.JPG";
import exterior3 from "../assets/exterior/frontBuilding3.JPG";
import exterior4 from "../assets/exterior/flowers.JPG";
import exterior5 from "../assets/exterior/entranceEast.JPG";
import exterior6 from "../assets/exterior/entranceWest.JPG";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Home = () => {
  return (
    <>
      <div class="container">
        <div class="section">
          <h1 class="title">Glendale Woods Apartments</h1>
          <br />
          <h2 class="subtitle">
            Studio, One and Two Bedroom Apartments in Broad Ripple
          </h2>
          <p>Welcome to Glendale Woods Apartments, a residential community featuring studio, one, and two-bedroom apartments in Broad Ripple. Spacious layouts and amenities welcome you home, along with exceptional service and an ideal location within walking distance to shopping, dining, and entertainment options. Are you looking for an apartment for rent in Indianapolis, IN? <a href="/contact">Contact</a> our friendly, professional staff today!</p>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={exterior1} alt="building" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={exterior2} alt="building" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={exterior3} alt="building" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={exterior4} alt="east entrance" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={exterior5} alt="west entrance" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={exterior6} alt="flowers" />
          </SwiperSlide>
        </Swiper>
      </div>
      <footer class="footer">Website by <a href="https://lanejm.com">Joshua Lane</a></footer>
    </>
  );
};

export default Home;
