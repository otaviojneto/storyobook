import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '.';
import theme from '../../styles/colors';

import icon from '../../Icons/icon-omnibees.svg';

export default {
  title: 'Micro Components/Button',
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['contained', 'outline', 'text'],
      },
    },
    disabled: { control: 'boolean' },
    block: { control: 'boolean' },
    borderRadius: { control: 'text' },
    color: { description: 'color', control: 'color' },
    colorText: { description: 'colorText', control: 'color' },
    size: {
      control: {
        type: 'radio',
        options: [
          'minimum',
          'small',
          'medium',
          'large',
          'extraLarge',
        ],
      },
    },
  },
} as Meta;

const Template: Story = ({
  variant = 'contained',
  block,
  size = 'medium',
  disabled = false,
  color = `${theme.colors?.gray4}`,
  colorText = `${theme.colors?.black}`,
}: ButtonProps) => (
  <>
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      colorText={colorText}
      color={color}
      block={block}
    >
      Button Default
    </Button>
    <br />

    <br />

    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      colorText={colorText}
      color={color}
      startIcon={icon}
    >
      BUTTON WITH ICON
    </Button>

    <br />

    <br />

    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      colorText={colorText}
      color={color}
      endIcon={icon}
    >
      BUTTON WITH ICON
    </Button>

    <br />
    <br />

    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      colorText={colorText}
      color={color}
      href="#/"
    >
      Enviar
    </Button>
  </>
);

export const Example = Template.bind({});
