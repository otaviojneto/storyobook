import React from 'react';
import {
  FormControl,
  FormControlProps,
  InputLabel,
  OutlinedInput as Field,
  OutlinedInputProps,
} from '@material-ui/core/';

import { Container, StylesProps } from './styles';

export type InputProps = OutlinedInputProps &
  FormControlProps &
  StylesProps & {
    onChange?: (value: any) => void;
  };

const OutlinedInput: React.FC<InputProps> = ({
  borderColor,
  bgLabel,
  label,
  name,
  fullWidth,
  labelWidth,
  labelColor,
  value,
  error,
  size,
  inputComponent,
  InputWidth,
  onChange,
}) => {
  return (
    <Container
      labelColor={labelColor}
      borderColor={borderColor}
      bgLabel={bgLabel}
      InputWidth={InputWidth}
    >
      <FormControl size={size} fullWidth={fullWidth}>
        <InputLabel id={name} htmlFor={name}>
          {label}
        </InputLabel>

        <Field
          id={name}
          name={name}
          value={value}
          labelWidth={labelWidth}
          onChange={onChange}
          error={error}
          inputComponent={inputComponent}
        />
      </FormControl>
    </Container>
  );
};

export default OutlinedInput;
