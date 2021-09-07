import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';
import { IcClose, IcCloseGrey } from '../../icons';
import theme from '../../styles/colors';

export const Button = styled.button`
  img {
    width: 100%;
  }
`;

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Container = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  padding: 14px;
  position: absolute;
  height: 90%;
  top: 5%;
  right: 5%;
  width: 90%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Close = styled.button`
  background-color: transparent;
  background-image: url(${IcClose});
  height: 24px;
  transition: ease-in-out 0.3s;
  width: 24px;

  &:hover,
  &:active {
    background-image: url(${IcCloseGrey});
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;

  div {
    width: 50%;
  }
`;

export const Swiper = styled(SwiperReact)``;
