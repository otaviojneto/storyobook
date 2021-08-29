import React from 'react';
import CardInfo from './CardInfo';

export default {
  title: 'Micro Components/CardInfo',
  argTypes: {
    img: { control: 'boolean' },
    flexCenter: { control: 'boolean' },

  },
};

export const CardImg = () => (
  <>
    <h2>Card </h2>
    <br />
    <CardInfo />
  </>
);
