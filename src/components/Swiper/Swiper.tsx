import React, { useState } from 'react';
import SwiperCore, {
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from 'swiper';
import { SwiperOptions } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import {
  Container,
  Content,
  ImageSelect,
  Swiper,
} from './styles';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/thumbs/thumbs.min.css';

SwiperCore.use([
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  A11y,
]);

export type SwiperProps = SwiperOptions & {
  slidesPreview?: number | 'auto';
};

const SwiperReact: React.FC<SwiperProps> = ({}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Content>
      <Container>
        <Swiper
          navigation
          slidesPerView={1}
          centeredSlides
          thumbs={{ swiper: thumbsSwiper }}
          watchSlidesVisibility
          // breakpoints={{
          //   768: {
          //     slidesPerView: 2,
          //     spaceBetween: 10,
          //   },
          // }}
        >
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/920x620/FF0000/FFFFFF"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/920x620/000000/FFFFFF"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/920x620/0000FF/FFFFFF"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </Container>

      <Swiper
        onSwiper={setThumbsSwiper}
        freeMode
        spaceBetween={10}
        watchSlidesProgress
        slidesPerView="auto"
      >
        <div>
          <SwiperSlide>
            <ImageSelect
              src="https://via.placeholder.com/200x200/FF0000/FFFFFF"
              alt=""
            />
          </SwiperSlide>
        </div>

        <div>
          <SwiperSlide>
            <ImageSelect
              src="https://via.placeholder.com/200x200/000000/FFFFFF"
              alt=""
            />
          </SwiperSlide>
        </div>

        <div>
          <SwiperSlide>
            <ImageSelect
              src="https://via.placeholder.com/200x200/0000FF/FFFFFF"
              alt=""
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </Content>
  );
};

export default SwiperReact;
