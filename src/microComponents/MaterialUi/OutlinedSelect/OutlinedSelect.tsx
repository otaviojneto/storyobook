import { TextField, TextFieldProps } from '@material-ui/core';
import React from 'react';
import { Container, SelectColorsProps } from './styles';

export type SelectProps = TextFieldProps &
  SelectColorsProps & {};

const OutlinedSelectMui: React.FC<SelectProps> = ({
  children,
  label,
  name,
  value,
  onChange,
  labelColor,
  labelColorActive,
  borderColorActive,
  helperText,
  size,
  error,
  fullWidth,
  InputWidth,
}) => {
  return (
    <Container
      labelColorActive={labelColorActive}
      borderColorActive={borderColorActive}
      labelColor={labelColor}
      InputWidth={InputWidth}
    >
      <TextField
        size={size}
        name={name}
        id={name}
        variant="outlined"
        select
        label={label}
        value={value}
        onChange={onChange}
        error={error}
        fullWidth={fullWidth}
        helperText={helperText}
      >
        {children}
      </TextField>
    </Container>
  );
};

export default OutlinedSelectMui;
