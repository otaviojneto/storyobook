import styled from 'styled-components';
import { IcChevronRightBlack } from '../../Icons';
import theme from '../../theme/ota';

export type OpenDateProps = {
  visibleDate?: boolean;
};

const color = theme.colors;

export const Btn = styled.button<OpenDateProps>`
  background-color: transparent;
  width: 100%;
`;

export const Container = styled.div<OpenDateProps>`
  left: 0;
  padding-bottom: ${({ visibleDate }) =>
    visibleDate ? '110px' : 0};
  position: ${({ visibleDate }) =>
    visibleDate ? 'absolute' : 'staic'};
  top: 30px;
  width: 100%;
  z-index: ${({ visibleDate }) => (visibleDate ? 40 : 0)};

  .rdrMonthAndYearWrapper {
    height: 26px;
    position: relative;
  }

  .rdrDateDisplayItemActive {
    background-color: ${color.gray1} !important;

    input {
      color: ${color.black};
    }
  }

  .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber p,
  .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber p,
  .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber p,
  .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber p {
    color: ${color.white};
  }

  .rdrEndEdge,
  .rdrInRange,
  .rdrStartEdge {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }

  .rdrDayStartPreview,
  .rdrDayEndPreview {
    background-color: ${color.primary}1a;
    border: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }

  .rdrDayHovered {
    border-radius: 2px;
  }

  .rdrMonthAndYearPickers {
    z-index: ${({ visibleDate }) => (visibleDate ? '' : -999)};
  }

  .rdrNextPrevButton {
    background-color: transparent;
    border: 2px solid;
    border-radius: 50%;
    left: 0;
    position: absolute;
    top: 18px;
    z-index: 1;

    &::before {
      background-image: url(${IcChevronRightBlack});
      background-repeat: no-repeat;
      bottom: 2px;
      content: '';
      height: 100%;
      position: absolute;
      right: 2.8px;
      transform: rotate(180deg);
      width: 100%;
    }

    i {
      border-width: 0;
    }
  }

  .rdrNextButton {
    left: calc(100% - 48px);
    position: absolute;
    top: 18px;
    z-index: 1;

    &::before {
      bottom: 0;
      left: 2.8px;
      top: 2px;
      transform: none;
    }
  }

  .rdrDay {
    border: 1px solid ${color.gray3};
    height: 54px;
    margin: 1px;
    width: calc(97% / 7);

    .rdrDayInPreview {
      background-color: ${color.primary}1a;
      border: none;
      bottom: 0;
      top: 0;
    }
  }

  .rdrMonthName {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .rdrDateDisplayWrapper {
    background-color: ${color.white};
  }

  .rdrDateDisplay {
    border: 1px solid ${color.text};
    border-radius: 4px;
    max-width: 310px;
    margin: 0;
    overflow: hidden;
  }

  .rdrMonth {
    position: relative;
    top: -18px;
    width: 512px;
  }

  .rdrDateDisplayItem {
    background-color: transparent;
    border: transparent;
    border-radius: 0;
    box-shadow: none;
    width: 100%;

    input {
      font-size: 14px;
    }
  }

  .rdrDateDisplayItem + .rdrDateDisplayItem {
    margin: 0;

    &::before {
      background-color: ${color.text};
      content: '';
      height: 22px;
      position: absolute;
      top: 6px;
      width: 1px;
    }
  }

  .rdrDayNumber {
    p {
      color: ${color.text};
      font-size: 11px;
      font-weight: 400;
      left: 14px;
      position: absolute;
      top: 20px;
    }
  }

  .rdrDayPassive {
    border: none;

    .rdrDayNumber {
      p {
        color: transparent;
      }
    }
  }

  span {
    font-size: 14px;
    font-weight: 700;

    &::after {
      background-color: transparent !important;
    }
  }

  /*-------------------------------------------- */
  @media (max-width: ${theme.breakpoints.sm}) {
    display: flex;
    justify-content: center;
    width: 100%;

    .rdrCalendarWrapper {
      width: 100%;
    }
    .rdrDateDisplay {
      max-width: 100%;
    }

    .rdrDayNumber {
      p {
        left: 12%;
      }
    }

    .rdrMonthAndYearWrapper {
      height: ${({ visibleDate }) => (visibleDate ? 'auto' : 0)};
      overflow: ${({ visibleDate }) =>
        visibleDate ? '' : 'hidden'};
      z-index: ${({ visibleDate }) => (visibleDate ? '' : -1)};
    }

    .rdrDay {
      width: calc(95% / 7);
    }

    .rdrMonthPicker,
    .rdrYearPicker {
      position: relative;
      margin: 0;

      Select {
        appearance: none;
        background: none;
        cursor: default;
        font-weight: 700;
        padding: 8px 0;
        -webkit-appearance: none;
        -moz-appearance: none;

        &:hover {
          background-color: transparent;
        }
      }

      option {
        background-color: transparent;
        display: none;
      }

      &::before {
        background-color: transparent;
        content: '';
        height: 34px;
        left: calc(50% - 74px);
        position: absolute;
        width: 150px;
      }
    }

    .rdrMonth {
      display: ${({ visibleDate }) =>
        visibleDate ? '' : 'none'};
      top: 0px;
      width: 100%;
    }

    .rdrNextPrevButton {
      top: 14px;
    }

    .rdrNextButton {
      top: 14px;
    }
  }
`;

export const Footer = styled.div`
  background-color: ${color.white};
  box-shadow: -2px -2px 20px #00000029;
  bottom: 0;
  height: 110px;
  padding: 20px;
  position: fixed;
  width: 100%;
  z-index: 1;

  div {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-bottom: 14px;

    h4 {
      color: ${color.clear};
    }

    p {
      font-size: 12px;
      line-height: 21px;
      margin-left: 3px;
    }
  }
`;
