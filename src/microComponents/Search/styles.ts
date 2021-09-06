import styled from 'styled-components';
import theme from '../../styles/colors';
import { IcLocalization } from '../../icons';

export type DataListProps = {
  open?: boolean;
};

export const Modal = styled.div`
  display: none;

  @media (max-width: 500px) {
    background-color: ${theme.colors?.white};
    display: block;
    height: 100vh;
    left: 0;
    padding: 15px 20px;
    position: absolute;
    top: 0;
    transition: ease-in-out 0.4s;
    width: 100%;
    z-index: 4;
  }
`;

export const Label = styled.label`
  font-size: ${({ title }) =>
    title ? title : `${theme.colors?.gray6}`};
  height: auto;
  position: relative;
  width: 100%;

  @media (max-width: 500px) {
    button {
      position: absolute;
      right: 0;
    }

    img {
      margin-right: 0;
      position: absolute;
      right: 12px;
    }

    h1 {
      position: relative;
      font-size: 14px;
      top: 0;
    }
  }
`;

export const InputString = styled.input`
  background-image: url(${IcLocalization});
  background-position-x: 4px;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 20px;
  border: 1px solid ${theme.colors?.gray4};
  border-radius: 4px;
  font-size: 16px;
  height: 42px;
  outline: none;
  padding: 8px 11px 8px 26px;
  width: 100%;

  &::placeholder {
    color: ${theme.colors?.gray4};
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
    opacity: 0;
  }

  &:active,
  &:focus {
    border: 1px solid ${theme.colors?.footerBg};
    transition: 0.15s ease-in-out;
  }
`;

export const Content = styled.div`
  @media (max-width: 500px) {
    position: relative;
  }
`;

export const DataList = styled.div<DataListProps>`
  background-color: ${theme.colors?.white};
  border: 1px solid ${theme.colors?.gray4};
  border-radius: 0 0 4px 4px;
  display: ${({ open }) => (open ? 'block' : 'none')};
  height: auto;
  overflow-y: auto;
  width: 100%;

  &::-webkit-scrollbar {
    display: auto;
  }

  button {
    background-color: ${theme.colors?.white};
    border: none;
    cursor: pointer;
    display: block;
    font-size: 14px;
    padding: 10px;
    text-align: left;
    width: 100%;

    h1 {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 4px;
    }

    p {
      font-size: 14px;
      line-height: 19px;
      margin: 0;
    }

    &:hover,
    &:active,
    &:focus {
      transition: 0.15s ease-in-out;
    }

    & + button {
      border-top: 1px solid ${theme.colors?.gray1};
    }
  }

  @media (max-width: 500px) {
    border: none;
    height: 100vh;
    left: 0;
    padding-top: 16px;
    position: absolute;
    top: -30px;
    z-index: 1;

    button {
      border-bottom: 1px solid ${theme.colors?.gray1};
      padding-bottom: 18px;

      & + button {
        border-top: none;
      }
    }
  }
`;

export const NotFound = styled.div`
  height: 30px;
  padding: 4px 6px;
  width: 100%;

  p {
    font-size: 12px;
  }
`;

export const Row = styled.div`
  display: flex;

  @media (max-width: 500px) {
    margin-bottom: 30px;
  }
`;

export const Historic = styled.div`
  padding-top: 50px;
  position: relative;

  h6 {
    font-size: 12px;
  }

  &::before {
    background-color: ${theme.colors?.gray3};
    content: '';
    height: 1px;
    position: absolute;
    top: 30px;
    width: 100%;
  }

  div {
    align-items: center;
    border-bottom: 1px solid ${theme.colors?.gray3};
    display: flex;

    button {
      background-color: ${theme.colors?.white};
      border: none;
      cursor: pointer;
      display: block;
      font-size: 14px;
      padding: 10px;
      text-align: left;
      width: 100%;

      h1 {
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 4px;
      }

      p {
        font-size: 14px;
        line-height: 19px;
        margin: 0;
      }

      &:hover,
      &:active,
      &:focus {
        transition: 0.15s ease-in-out;
      }
    }
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 12px;
`;
