import React from 'react';
import { Story, Meta } from '@storybook/react';
import Text from './Text';

export default {
  title: 'Micro Components/Text',
  argTypes: {
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      control: { type: 'select' },
    },
    color: {
      control: 'color',
    },
    space: {
      description: 'm={margin} , p={padding}...',
    },
  },
} as Meta;

const Template: Story = ({ as, color, space }) => (
  <>
    <Text as={as} color={color} space={space}>
      Lorem ipsum, dolor sit amet consectetur adipisicing
      elit....
    </Text>
  </>
);

export const Example = Template.bind({});
