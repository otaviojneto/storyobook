import { Header } from './../RoomTypes/styles';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Swiper as SwiperReact } from 'swiper/react';
import {
  IcArrowLeft,
  IcChevronRight,
  IcChevronRightBlack,
  IcClose,
  IccloseWhite,
} from '../../Icons';

export const Content = styled.div`
  background-color: #000000cc;
  display: inline-block;
  left: 0;
  height: 100vh;
  overflow: scroll;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1024px) {
    height: 100vh;
  }
`;

export const Close = styled.button`
  background-color: transparent;
  background-image: url(${IccloseWhite});
  background-repeat: no-repeat;
  height: 24px;
  position: absolute;
  right: 14px;
  top: 14px;
  transition: ease-in-out 0.3s;
  width: 24px;
  z-index: 20;

  &:hover,
  &:active {
    background-image: url(${IccloseWhite});
  }
`;

export const Container = styled.div`
  max-height: 84vh;
  margin-bottom: 36px;

  img {
    max-width: 100%;
    max-height: 80vh;
  }

  h1 {
    color: ${theme('colors.white')};
    font-size: 14px;
    line-height: 27px;
    padding: 10px;
    text-align: center;
  }

  .swiper-container {
    .swiper-slide {
      cursor: context-menu !important;
      display: flex;
      justify-content: center;
      max-height: 100%;
      opacity: 1;
    }
  }
`;

export const Swiper = styled(SwiperReact)`
  .swiper-button-prev,
  .swiper-button-next {
    background-color: ${theme('colors.white')};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 30px;
    top: 50%;
    position: absolute;
    width: 30px;
    z-index: 3;

    &::after {
      content: '';
      background-color: ${theme('colors.text')};
    }
  }

  .swiper-button-prev {
    background-image: url(${IcArrowLeft});
    background-position: center;
    background-repeat: no-repeat;
  }

  .swiper-button-next {
    background-image: url(${IcChevronRightBlack});
    background-position: center;
    background-repeat: no-repeat;
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 30px;
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 30px;
  }

  .swiper-slide {
    cursor: pointer;
    width: 80px;
    max-height: 46px;
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }

  @media (max-width: 1366px) {
    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
      right: 8%;
    }

    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
      left: 8%;
    }
  }
`;

export const ImageSelect = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }
`;

export const Bullet = styled.div`
  max-height: 16vh;
  .swiper-container {
    .swiper-slide {
      img {
        max-width: 80px;
      }
    }
  }
`;
