import styled from 'styled-components';

export type ColorProps = {
  colorText?: string;
  checkColor?: string;
  fontSize?: number;
  fontWeight?: number;
};

export const Container = styled.div<ColorProps>`
  .MuiFormControlLabel-label {
    color: ${({ colorText }) => colorText && colorText};
  }

  .MuiCheckbox-colorSecondary.Mui-checked {
    color: ${({ checkColor }) => checkColor && checkColor};
  }

  .MuiTypography-body1 {
    font-size: ${({ fontSize }) => fontSize && fontSize}px;
    font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  }
`;
