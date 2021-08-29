import styled from 'styled-components';

export type OpenTabProps = {
  bg?: string;
  bgColorHeader?: string;
  isOpen?: boolean;
  colorDivider?: string;
  colorHeaderText?: string;
  ContentBg?: string;
  sizeHeaderText?: number;
};

export const Tab = styled.div<OpenTabProps>`
  background-color: ${({ bg }) => bg};
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  height: 100%;
  justify-content: space-between;
  position: relative;
  width: 100%;

  & + div {
    border-radius: 0;
    &::before {
      background-color: ${({ colorDivider }) => colorDivider};
      content: '';
      height: 1px;
      left: 20px;
      position: absolute;
      top: 0;
      width: calc(100% - 40px);
      z-index: 1;
    }
  }
`;

export const Hero = styled.div<OpenTabProps>`
  align-items: center;
  background-color: ${({ bgColorHeader }) => bgColorHeader};
  border-radius: 2px;
  display: flex;
  padding: 20px;
  width: 100%;

  p {
    color: ${({ colorHeaderText }) => colorHeaderText};
    cursor: pointer;
    flex: 1;
    font-size: ${({ sizeHeaderText }) => sizeHeaderText}px;
    font-weight: 700;
    margin: 0;
  }
`;

export const Icon = styled.img`
  height: 18px;
  margin-right: 10px;
`;

export const ExpandIcon = styled.img<OpenTabProps>`
  cursor: pointer;
  transition: ease-in-out 0.3s;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 0)};
`;

export const Content = styled.div<OpenTabProps>`
  background-color: ${({ ContentBg }) => ContentBg};
  cursor: default;
  height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
  padding: ${({ isOpen }) => (isOpen ? '8px 20px 20px' :'0 20px ')};
  transition: ease-in-out 0.4s;
  overflow: ${({ isOpen }) => (isOpen ? '' : 'hidden')};
  width: 100%;
`;
