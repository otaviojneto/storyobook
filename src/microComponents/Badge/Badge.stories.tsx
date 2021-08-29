import React from 'react';
import { Story, Meta } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';

export default {
  title: 'Micro Components/Badge',
  argTypes: {
    color: { description: 'color', control: 'color' },
    colorText: { description: 'colorText', control: 'color' },
  },
} as Meta;

const Template: Story = ({
  color = 'blue',
  colorText,
}: BadgeProps) => (
  <Badge color={color} colorText={colorText}>
    Confirmado
  </Badge>
);

export const Example = Template.bind({});
