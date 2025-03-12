import React, { useState , useRef } from 'react'

import '../index.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Slider = () => {
  return (
      <>
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination , Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide>
       
      </SwiperSlide>
      <SwiperSlide>
        
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  </>
  )
}

export default Slider