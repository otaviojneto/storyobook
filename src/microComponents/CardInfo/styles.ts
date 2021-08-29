import styled from 'styled-components';
import theme from '../../styles/colors';

export const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
  rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  width: 230px;

  button {
    background-color: ${theme.colors.white};
    border-radius: 4px;
    text-align: left;
    width: 100%;

    h3 {
      margin-bottom: 4px;
    }

    h4 {
      margin-bottom: 2px;
      font-weight: 400;
    }

    p {
      margin-bottom: 6px;
    }
  }
`;

export const Base = styled.div`
  padding: 8px;
`;

export const Info = styled.div`
  padding: 4px;
`;

export const Image = styled.img`
  border-radius: 4px 4px 0 0;
  height: 180px;
  width: 100%;
`;

export const Footer = styled.div`
  align-items: center;
  border-top: 1px solid ${theme.colors.grey};
  display: flex;
  justify-content: space-around;
  padding-top: 10px;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    p {
      font-size: 10px;
      line-height: 0;
      margin: 4px 0 8px;
    }

    img {
      width: 22px;
    }
  }
`;
