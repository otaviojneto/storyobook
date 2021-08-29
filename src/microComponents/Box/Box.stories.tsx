import React from 'react';
import Box from './Box';

export default {
  title: 'Micro Components/Box',
  component: Box,
};

export const Basic = () => (
  <Box
    border="1px solid #f0f0f0"
    borderRadius={8}
    m={20}
    px={20}
    py={40}
    bg="#fff"
    boxShadow="0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)"
    color="blue"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <h1>Box Global</h1>
  </Box>
);
