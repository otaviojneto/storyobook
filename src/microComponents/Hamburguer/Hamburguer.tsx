import React from 'react';
import { ColorProps, Menu } from './styles';

const Hamburguer: React.FC<ColorProps> = ({ color }) => {
  return (
    <>
      <Menu color={color}>
        <span></span>
      </Menu>
    </>
  );
};

export default Hamburguer;
