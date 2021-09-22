import React, { useState } from 'react';
import SwiperReact from './Swiper';

export default {
  title: 'Components/Swiper',

  argTypes: {
    name: { control: 'text', description: 'title' },
  },
};

export const SwiperComponent = () => (
  <>
    <SwiperReact />
  </>
);
