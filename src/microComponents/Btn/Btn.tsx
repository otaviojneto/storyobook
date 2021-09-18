import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Btn: React.FC = () => {
  return (
    <Swiper slidesPerView={'auto'}
      spaceBetween={8}
      freeMode
      scrollbar={{ draggable: true }}
>
      <SwiperSlide>oi</SwiperSlide>
      <SwiperSlide>oi</SwiperSlide>
    </Swiper>
  );
};

export default Btn;
