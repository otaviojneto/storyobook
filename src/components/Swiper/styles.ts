import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Swiper as SwiperReact } from 'swiper/react';

export const Content = styled.div`
  background-color: #000000cc;
  opacity: 0.8;
`;

export const Container = styled.div`
  padding: 0 10%;
  margin-bottom: 36px;

  .swiper-container {
    .swiper-slide {
      cursor: context-menu !important;
      display: flex;
      justify-content: center;
      opacity: 1;
    }
  }
`;

export const Swiper = styled(SwiperReact)`
  .swiper-button-prev,
  .swiper-button-next {
    background-color: ${theme('colors.white')};
    border-radius: 50%;
    height: 30px;

    &::after {
      color: ${theme('colors.text')};
      font-size: 12px;
      font-weight: 900;
    }
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 0px;
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 0px;
  }

  .swiper-slide {
    cursor: pointer;
    width: 80px;
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
`;

export const ImageSelect = styled.img`
  max-width: 80px;
`;
