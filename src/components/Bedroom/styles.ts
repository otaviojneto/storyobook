import { Button } from '../CardModal/styles';
import styled from 'styled-components';

export type BedroomProps = {
  isOpen?: boolean;
};

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 4px 4px 0 0;
  display: flex;
  height: 170px;
  margin-bottom: 20px;
  padding: 20px;
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 20px;
  min-width: 380px;

  h4 {
    font-size: 16px;
    line-height: 19px;
  }

  p {
    font-size: 12px;
    line-height: 14px;

    & + p {
      margin-bottom: 8px;
    }
  }

  h6 {
    color: #008009;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
  }

  h5 {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    margin: 6px 0 10px 3px;
  }
`;

export const CardName = styled.div`
  align-items: center;
  margin-bottom: 6px;
  display: flex;

  div {
    align-items: center;
    display: flex;

    p {
      margin: 0 8px 0 6px;
    }
  }
`;

export const Image = styled.img`
  height: 130px;
`;

export const Description = styled.div<BedroomProps>`
  align-items: center;
  display: flex;
  margin-bottom: 10px;

  img {
    padding-right: 10px;
  }

  div {
    align-items: center;
    display: flex;
    overflow: hidden;
    flex-wrap: ${({ isOpen }) => (isOpen ? 'wrap' : '')};

    p {
      line-height: 21px;
      padding-right: 6px;
      margin: 0;

      & + p {
        border-left: 1px solid #e6e6e6;
        padding-left: 6px;
      }
    }
  }
`;
