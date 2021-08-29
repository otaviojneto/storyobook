import React from 'react';
import { Box, Button } from '../../microComponents';
import { Container } from './styles';

interface DataProps {
  name?: string;
  link?: string;
  id?: number;
}

interface LinkProps {
  data?: DataProps[];
}

const LinkDoors: React.FC<LinkProps> = ({ data }) => {
  return (
    <Box
      bg="#F5F5F5"
      py={26}
      px={30}
      width={280}
      maxHeight="100%"
    >
      {data.map(item => (
        <Button variant="text" key={item.id} href={item.link}>
          {item.name}
        </Button>
      ))}

      <Button
        variant="contained"
        size="small"
        color="#E60000"
        colorText="#ffffff"
        marginTop={20}
      >
        Cancelar Reserva
      </Button>
    </Box>
  );
};

export default LinkDoors;
