import React from 'react';
import CardModal from './CardModal';

export default {
  title: 'Components/CardModal',
  argTypes: {
    as: {
      options: ['text'],
      control: { type: 'select' },
    },
  },
}

export const Card= () => (
  <>
    <CardModal Img={'https://www.star.ind.br/_libs/imgs/thumbs2/18639.jpg'} />
  </>
);

