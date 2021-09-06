import styled from 'styled-components';
import themeColor from '../../styles/colors';

export type OpenTabProps = {
  bg?: string;
  bgColorHeader?: string;
  colorDivider?: string;
  colorHeaderText?: string;
  contentBg?: string;
  isOpen?: boolean;
  paddingHeader?: number;
  childrenPaddingX?: number;
  childrenPaddingY?: number;
  sizeHeaderText?: number;
};

export const Tab = styled.div<OpenTabProps>`
  background-color: ${({ bg }) =>
    bg && `${themeColor.colors.grey}`};
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
  padding: ${({ paddingHeader }) =>
    paddingHeader && paddingHeader}px;
  width: 100%;

  div {
    display: flex;
    color: ${({ theme }) => theme};
    cursor: pointer;
    flex: 1;
    font-size: ${({ sizeHeaderText }) =>
      sizeHeaderText ?? '16px'}px;
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
  background-color: ${({ contentBg }) => contentBg};
  cursor: default;
  height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};

  padding-left: ${({ childrenPaddingX }) =>
    childrenPaddingX && childrenPaddingX}px;
  padding-right: ${({ childrenPaddingX }) =>
    childrenPaddingX && childrenPaddingX}px;
  padding-top: ${({ childrenPaddingY }) =>
    childrenPaddingY && childrenPaddingY}px;
  padding-bottom: ${({ childrenPaddingY }) =>
    childrenPaddingY && childrenPaddingY}px;

  padding: ${({ isOpen, childrenPaddingX, childrenPaddingY }) =>
    isOpen ? `${childrenPaddingY}, ${childrenPaddingX}` : '0'};
  transition: ease-out 0.3s;
  overflow: ${({ isOpen }) => (isOpen ? '' : 'hidden')};
  width: 100%;
`;
