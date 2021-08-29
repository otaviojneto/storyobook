import React from 'react';

import { Container } from './styles';

export interface BadgeProps {
  color: string;
  colorText?: string;
}

const Badge: React.FC<BadgeProps> = ({
  color,
  colorText,
  children,
}) => {
  return (
    <Container color={color} colorText={colorText}>
      {children}
    </Container>
  );
};

export default Badge;
