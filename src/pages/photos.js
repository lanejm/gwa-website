import React from "react";
//import swiper react components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
//photos-studio
import studio1 from "../assets/Studio/DSCN7844.JPG";
import studio2 from "../assets/Studio/DSCN7846.JPG";
import studio3 from "../assets/Studio/DSCN7850.JPG";
import studio4 from "../assets/Studio/DSCN7851.JPG";
import studio5 from "../assets/Studio/DSCN7854.JPG";
import studio6 from "../assets/Studio/DSCN7855.JPG";
import studio7 from "../assets/Studio/DSCN7859.JPG";
import studio8 from "../assets/Studio/DSCN7860.JPG";
//photos-oneBedroom
import oneBedroom1 from "../assets/oneBedroom/DSCN9951.JPG";
import oneBedroom2 from "../assets/oneBedroom/DSCN9957.JPG";
import oneBedroom3 from "../assets/oneBedroom/DSCN9958.JPG";
import oneBedroom4 from "../assets/oneBedroom/DSCN9961.JPG";
import oneBedroom5 from "../assets/oneBedroom/DSCN9964.JPG";
import oneBedroom6 from "../assets/oneBedroom/DSCN9971.JPG";
import oneBedroom7 from "../assets/oneBedroom/DSCN9974.JPG";
import oneBedroom8 from "../assets/oneBedroom/DSCN9977 - Copy.JPG";
//photos-twoBedroom
import twoBedroom1 from '../assets/twoBedroom/DSCN3759.JPG';
import twoBedroom2 from '../assets/twoBedroom/DSCN3760.JPG'
import twoBedroom3 from '../assets/twoBedroom/DSCN3763.JPG';
import twoBedroom4 from '../assets/twoBedroom/DSCN3764.JPG';
import twoBedroom5 from '../assets/twoBedroom/DSCN3766.JPG';
import twoBedroom6 from '../assets/twoBedroom/DSCN3768.JPG';
import twoBedroom7 from '../assets/twoBedroom/DSCN3770.JPG';
import twoBedroom8 from '../assets/twoBedroom/DSCN3772.JPG';
//property amenities
import property1 from '../assets/propertyAmenities/laundry.JPG';
import property2 from '../assets/propertyAmenities/mailboxes.JPG';
import property3 from '../assets/propertyAmenities/keypadLock.JPG';
import property4 from '../assets/propertyAmenities/garage.JPG';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Photos = () => {
  return (
    <>
     <section class="hero is-info">
        <div class="hero-body">
          <h1 class="title has-text-left">Property Amenities</h1>
        </div>
      </section>
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
          <img src={property1} alt="laundry" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={property2} alt="mailboxes" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={property3} alt="keypad lock" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={property4} alt="garage" />
        </SwiperSlide>
      </Swiper>
      <section class="hero is-info">
        <div class="hero-body">
          <h1 class="title has-text-left">Studio Apartment</h1>
        </div>
      </section>
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
          <img src={studio1} alt="studio apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={studio2} alt="studio apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={studio3} alt="studio apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={studio4} alt="studio apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={studio5} alt="studio apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={studio6} alt="studio apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={studio7} alt="studio apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={studio8} alt="studio apartment" />
        </SwiperSlide>
      </Swiper>
      <section class="hero is-info">
        <div class="hero-body">
          <h1 class="title has-text-left">One Bedroom Apartment</h1>
        </div>
      </section>
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
          <img src={oneBedroom1} alt="one bedroom apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={oneBedroom2} alt="one bedroom apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={oneBedroom3} alt="one bedroom apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={oneBedroom4} alt="one bedroom apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={oneBedroom5} alt="one bedroom apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={oneBedroom6} alt="one bedroom apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={oneBedroom7} alt="one bedroom apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={oneBedroom8} alt="one bedroom apartment" />
        </SwiperSlide>
      </Swiper>
      <section class="hero is-info">
        <div class="hero-body">
          <h1 class="title has-text-left">Two Bedroom Apartment</h1>
        </div>
      </section>
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
          <img src={twoBedroom1} alt="two bedroom apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={twoBedroom2} alt="two bedroom apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={twoBedroom3} alt="two bedroom apartment"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={twoBedroom4} alt="two bedroom apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={twoBedroom5} alt="two bedroom apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={twoBedroom6} alt="two bedroom apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={twoBedroom7} alt="two bedroom apartment" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={twoBedroom8} alt="two bedroom apartment" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Photos;

//resize images?
