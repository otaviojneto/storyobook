import {
  Checkbox as CheckboxMUI,
  CheckboxProps as CheckboxPropsMUI,
  FormControlLabel,
} from '@material-ui/core';
import React from 'react';

import { ColorProps, Container } from './styles';

export type CheckboxProps = CheckboxPropsMUI &
  ColorProps & {
    label: string;
  };

const Checkbox: React.FC<CheckboxProps> = ({
  checkColor,
  colorText,
  fontSize,
  fontWeight,
  label,
  onChange,
  name,
  ...rest
}) => {
  return (
    <Container
      colorText={colorText}
      checkColor={checkColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      <FormControlLabel
        control={
          <CheckboxMUI
            onChange={onChange}
            name={name}
            {...rest}
          />
        }
        label={label}
      />
    </Container>
  );
};

export default Checkbox;
