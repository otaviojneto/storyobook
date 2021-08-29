import styled from 'styled-components';
import { IcLocalization } from '../../icons';

export type DataListProps = {
  Open?: boolean;
};

export const InputString = styled.input`
  background-image: url(${IcLocalization});
  background-position-x: 4px;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 20px;
  border: 1px solid #c5c5c5;
  border-radius: 4px;
  font-size: 16px;
  height: 42px;
  padding: 8px 11px 8px 26px;
  width: 100%;
  /* pointer-events: none; */

  &::placeholder {
    color: #c5c5c5;
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
    opacity: 0;
  }
`;

export const DataList = styled.div<DataListProps>`
  background-color: #ffffff;
  border: 1px solid #c5c5c5;
  border-radius: 4px;
  height: auto;
  display: ${({ Open }) => (Open ? '' : 'none')};

  button {
    background-color: #ffffff;
    cursor: pointer;
    display: block;
    padding: 10px;
    text-align: left;
    width: 100%;

    & + button {
      border-top: 1px solid #efefef;
    }
  }
`;
