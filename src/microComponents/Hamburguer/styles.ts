import styled from 'styled-components';

export const Menu = styled.button`
    background-color: red;
    height: 4px;
    position: relative;
    top: 55px;
    width: 24px;

    &::before {
      background-color: red;
      content: '';
      height: 4px;
      position: absolute;
      right: 0;
      top: 9px;
      transition: ease-in-out 0.4s;
      width: 18px;
    }

    &::after {
      background-color: red;
      content: '';
      height: 4px;
      position: absolute;
      right: 0;
      top: 19px;
      transition: ease-in-out 0.4s;
      width: 12px;
    }

    &:hover {
      &::before {
        width: 24px;
      }

      &::after {
        width: 24px;
      }
    }
  }
`;
