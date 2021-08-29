import styled from 'styled-components';

export const BoxHeader = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 4px 4px 0 0;
  display: flex;
  height: 56px;
  padding: 20px;
  margin-bottom: 3px;
  width: 100%;
`;

export const Reserv = styled.div`
  align-items: center;
  display: flex;

  padding: 8px 20px 0;

  img {
    display: inline-block;
    margin: 0 10px 8px 0;
    width: 16px;
  }

  strong {
    color: #273240;
  }

  h3 {
    color: #9c9c9c;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
  }

  h4 {
    color: #9c9c9c;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    margin-left: 20px;
  }

  & + & {
    position: relative;
    &::before {
      background-color: #e6e6e6;
      content: '';
      height: 18px;
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
    }
  }
`;

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 4px 4px 0 0;
  display: flex;
  justify-content: space-between;
  height: 260px;
  padding: 4px;
`;

export const Content = styled.div`
  display: flex;
  padding: 20px 0 20px 16px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;

  h1 {
    color: #273240;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const List = styled.div`
  div {
    align-items: center;
    display: flex;
    margin-bottom: 10px;

    img {
      margin-right: 10px;
    }
  }

  p {
    color: #273240;
    font-size: 12px;
    line-height: 14px;
    margin: 0;
  }
`;

export const Value = styled.div`
  div {
    align-items: flex-end;
    display: flex;

    h2 {
      font-size: 20px;
      line-height: 20px;
      font-weight: 700;
      margin: 0;
    }
  }

  h6 {
    color: #666666;
    font-size: 10px;
    line-height: 14px;
    margin: 0;
    padding-bottom: 4px;
  }
`;
