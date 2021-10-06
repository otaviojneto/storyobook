import styled from 'styled-components';
import { IcChevronRightBlack } from '../../Icons';
import theme from '../../theme/ota';

export type OpenDateProps = {
  visibleDate?: boolean;
};

const color = theme.colors;

export const Btn = styled.button`
  background-color: transparent;
  width: 100%;
`;

export const Container = styled.button<OpenDateProps>`
  width: 100%;

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
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
  }

  .rdrDayStartPreview,
  .rdrDayEndPreview {
    background-color: ${color.primary}1a;
    border: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
  }

  .rdrDayHovered {
    border-radius: 2px;
  }

  .rdrMonthAndYearPickers {
    z-index: -999;
  }

  .rdrNextPrevButton {
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid;
    position: absolute;
    left: 0;
    top: 14px;
    z-index: 1;

    &::before {
      content: '';
      background-image: url(${IcChevronRightBlack});
      background-repeat: no-repeat;

      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 2px;
      transform: rotate(180deg);
      right: 2.8px;
    }

    i {
      border-width: 0;
    }
  }

  .rdrDay {
    border: 1px solid ${color.gray3};
    height: 54px;
    margin: 1px;
    width: calc(97% / 7);

    .rdrDayInPreview {
      border: none;
      top: 0;
      bottom: 0;
      background-color: ${color.primary}1a;
    }
  }

  .rdrNextButton {
    position: absolute;
    left: calc(100% - 48px);
    top: 14px;
    z-index: 1;

    &::before {
      bottom: 0;
      transform: none;
      left: 2.8px;
      top: 2px;
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
  }

  .rdrMonth {
    position: relative;
    top: -18px;
    width: 512px;
  }

  .rdrDateDisplayItem {
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    border: transparent;
    width: 100%;

    input {
      font-size: 14px;
    }
  }

  .rdrDateDisplayItem + .rdrDateDisplayItem {
    margin: 0;
    &::before {
      content: '';
      height: 22px;
      width: 1px;
      position: absolute;
      top: 6px;
      background-color: ${color.text};
    }
  }

  .rdrDayNumber {
    p {
      color: ${color.text};
      font-size: 11px;
      font-weight: 400;
      position: absolute;
      top: 20px;
      left: 14px;
    }
  }

  .rdrDayPassive {
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
      z-index: ${({ visibleDate }) => (visibleDate ? '' : -1)};
      overflow: ${({ visibleDate }) =>
        visibleDate ? '' : 'hidden'};
    }

    .rdrDay {
      width: calc(95% / 7);
    }

    .rdrMonth {
      display: ${({ visibleDate }) =>
        visibleDate ? '' : 'none'};
      top: -40px;
      width: 100%;
    }
  }
`;
