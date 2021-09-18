import styled from 'styled-components';
import theme from '../../styles/colors';

export type ColorProps = {
  color?: string;
};

export const Menu = styled.button<ColorProps>`
display: none;


@media(max-width: 568px) {
  background-color: transparent;
  display: block;
  height: 24px;
  position: relative;
  width: 26px;

  &::before {
    background-color: ${({ color }) =>
      color ? color : `${theme.colors.black}`};
    content: '';
    height: 4px;
    right: 0;
    position: absolute;
    top: 9px;
    transition: ease-in-out 0.4s;
    width: 17px;
  }

  &::after {
    background-color: ${({ color }) =>
      color ? color : `${theme.colors.black}`};
    content: '';
    height: 4px;
    right: 0;
    position: absolute;
    top: 18px;
    transition: ease-in-out 0.4s;
    width: 10px;
  }

  &:hover {
    &::after,
    &::before {
      width: 100%;
    }
  }

  span {
    background-color: ${({ color }) =>
      color ? color : `${theme.colors.black}`};
    height: 4px;
    position: absolute;
    right: 0;
    top: 0px;
    width: 100%;
  }



  }
`;
