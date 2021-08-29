import styled from 'styled-components';

export type BoxProps = {
  border?: string;
  flex?: string;
  flexCenter?: string;
  flexEnd?: string;
  height?: string;
  shadow?: string;
  width?: string;
};

export const Box = styled.div<BoxProps>`
  background-color: #ffffff;
  border-radius: 4px;
  border: ${({ border }) => (border ? ' 1px solid #000' : '')};
  box-shadow: ${({ shadow }) =>
    shadow
      ? shadow
      : ' 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%),  0px 9px 46px 8px rgb(0 0 0 / 12%)'};
  display: ${({ flex }) => (flex ? 'flex' : '')};
  justify-content: ${({ flexCenter }) =>
    flexCenter ? 'center' : ''};
  justify-content: ${({ flexEnd }) =>
    flexEnd ? 'flex-end' : ''};
  height: ${({ height }) => (height ? height : 'auto')};
  padding: 8px;
  width: ${({ width }) => (width ? width : '100%')};
`;
