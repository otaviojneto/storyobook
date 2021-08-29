import React from 'react';
import Bedroom from '.';
import { BedroomProps } from './Bedroom';

export default {
  title: 'Components/Bedroom',

  argTypes: {
    name: { control: 'text', description: 'title' },
    image: { control: 'text', description: 'title' },
  },
};

export const Quarto = ({
  name = 'Twin Tower Vista Mar',
  image = 'https://media.omnibees.com/Images/1054/Property/32885.jpg',
}: BedroomProps) => (
  <>
    <Bedroom name={name} image={image} />
  </>
);
