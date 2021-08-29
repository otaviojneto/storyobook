import React from 'react';
import { height } from 'styled-system';
import { Box, BoxProps } from './styles';

const Card: React.FC<BoxProps> = ({
  children,
  border,
  flex,
  flexCenter,
  flexEnd,
  height,
  shadow,
  width,
}) => {
  return (
    <Box
      flex={flex}
      border={border}
      flexCenter={flexCenter}
      flexEnd={flexEnd}
      height={height}
      shadow={shadow}
      width={width}
    >
      {children}
    </Box>
  );
};

export default Card;
