import React, { ButtonHTMLAttributes } from 'react';
import { Btn, EndIcon, StartIcon } from './styles';

export type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'contained' | 'outline' | 'text';
    border?: boolean;
    borderColor?: string;
    block?: boolean;
    color?: string;
    colorText?: string;
    href?: any;
    marginBottom?: number;
    marginLeft?: number;
    marginTop?: number;
    size?:
      | 'minimum'
      | 'small'
      | 'medium'
      | 'large'
      | 'extraLarge';
    startIcon?: string;
    endIcon?: string;
    onClick?: () => void;
  };

const Button: React.FC<ButtonProps> = ({
  block,
  children,
  colorText,
  color,
  href,
  marginBottom,
  marginLeft,
  marginTop,
  onClick,
  endIcon,
  size,
  startIcon,
  variant = 'contained',
  ...rest
}) => (
  <Btn
    as={href && 'a'}
    href={href}
    block={block}
    color={color}
    colorText={colorText}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginTop={marginTop}
    onClick={onClick}
    variant={variant}
    size={size}
    {...rest}
  >
    {startIcon && <StartIcon src={startIcon} />}
    {children}
    {endIcon && <EndIcon src={endIcon} />}
  </Btn>
);

export default Button;
