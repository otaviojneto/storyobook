import React from 'react';
import Btn from './Btn';

export default {
  title: 'Micro Components/Hamburguer',
  argTypes: {
    flex: { control: 'boolean' },
  },
};

export const Basic = () => (
  <>
    <Btn />
  </>
);
