import styled from 'styled-components';
import theme from '../../../styles/colors';

export type SelectColorsProps = {
  borderColorActive?: string;
  labelColorActive?: string;
  labelColor?: string;
  InputWidth?: string;
};

export const Container = styled.div<SelectColorsProps>`
  width: ${({ InputWidth }) => InputWidth && InputWidth};

  .MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: ${({ borderColorActive }) =>
      borderColorActive
        ? borderColorActive
        : `${theme?.colors?.grey1}`};
  }

  .MuiFormHelperText-contained {
    margin-left: 8px;
  }

  .MuiFormLabel-root.Mui-focused {
    color: ${({ labelColorActive }) =>
      labelColorActive
        ? labelColorActive
        : `${theme?.colors?.grey1}`};
  }

  .MuiFormLabel-root {
    color: ${({ labelColor }) =>
      labelColor ? labelColor : `${theme?.colors?.grey}`};
  }
`;
