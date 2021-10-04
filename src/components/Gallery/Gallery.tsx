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
  Bullet,
  Close,
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
  titleGallery?: string;
  dataGallery?: string[];
  onClick?: () => void;
};

const SwiperReact: React.FC<SwiperProps> = ({
  dataGallery,
  onClick,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Content>
      <Container>
        <Close onClick={onClick} />
        <Swiper
          loop
          navigation
          slidesPerView={1}
          centeredSlides
          thumbs={{ swiper: thumbsSwiper }}
          watchSlidesVisibility
        >
          {dataGallery.map(image => (
            <>
              <SwiperSlide>
                <ImageSelect>
                  <img src={image} alt="image" />
                </ImageSelect>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </Container>

      <Bullet>
        <Swiper
          onSwiper={setThumbsSwiper}
          freeMode
          spaceBetween={10}
          watchSlidesProgress
          slidesPerView="auto"
        >
          {dataGallery.map(bullet => (
            <SwiperSlide>
              <img src={bullet} alt="image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Bullet>
    </Content>
  );
};

export default SwiperReact;
