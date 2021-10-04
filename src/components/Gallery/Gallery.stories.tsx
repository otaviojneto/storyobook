import React, { useState } from 'react';
import Gallery from './Gallery';

export default {
  title: 'Components/Swiper',

  argTypes: {
    name: { control: 'text', description: 'title' },
  },
};

const Images = [
  'https://via.placeholder.com/920x500/FF0000/FFFFFF',
  'https://via.placeholder.com/920x500/0000FF/FFFFFF',
  'https://via.placeholder.com/920x500/FFFFFF/000000',
];

export const SwiperComponent = () => (
  <>
    <Gallery dataGallery={Images} />
  </>
);
