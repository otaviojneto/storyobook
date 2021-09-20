import styled from 'styled-components';
import theme from '../../../styles/colors';

export type StylesProps = {
  bgLabel?: string;
  labelColor?: string;
  borderColor?: string;
  InputWidth?: string;
};

export const Container = styled.div<StylesProps>`
  width: ${({ InputWidth }) =>
    InputWidth ? InputWidth : '100%'};
  .MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: ${({ borderColor }) =>
      borderColor ? borderColor : ` ${theme?.colors?.grey1}`};
  }

  .MuiFormHelperText-contained {
    margin-left: 8px;
  }

  .MuiFormLabel-root.Mui-focused {
    color: ${({ labelColor }) =>
      labelColor ? labelColor : ` ${theme?.colors?.grey}`};
  }

  .MuiInputLabel-formControl {
    background-color: ${({ bgLabel }) =>
      bgLabel ? bgLabel : `${theme?.colors?.white}`};
    top: -9px;
    left: 16px;
  }
`;
