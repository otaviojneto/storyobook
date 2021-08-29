import React from 'react';
import Card from './Card';
import { BoxProps } from './styles';

export default {
  title: 'Micro Components/Card',
  component: Card,
  argTypes: {
    flex: { control: 'boolean' },
    flexCenter: { control: 'boolean' },
    flexEnd: { control: 'boolean' },
    height: { control: 'text' },
    border: { control: 'boolean' },
    shadow: { control: 'boolean' },
    width: { control: 'text' },
  },
};

export const Basic = ({
  border,
  flex,
  flexCenter,
  flexEnd,
  height,
  shadow,
  width,
}: BoxProps) => (
  <>
    <h2>Card </h2>
    <br />
    <br />
    <Card
      border={border}
      flex={flex}
      flexCenter={flexCenter}
      flexEnd={flexEnd}
      height={height}
      shadow={shadow}
      width={width}
    >
      <h1>Card</h1>
      <p>Card</p>
      <h3>Card</h3>
    </Card>
  </>
);
