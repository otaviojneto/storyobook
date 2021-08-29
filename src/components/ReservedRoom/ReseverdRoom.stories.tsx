import React from 'react';
import ReseverdRoom from '.';
import LinkDoors from '../LinkDoors';
import { CardProps } from './ReservedRoom';

export default {
  title: 'Components/Minhas Reservas',
  argTypes: {
    title: { control: 'text', description: 'title' },
  },
};

const links = [
  {
    id: 1,
    name: 'Alterar Datas',
    link: '#',
  },
  {
    id: 1,
    name: 'Alterar Numero de Hóspedes',
    link: '',
  },
  {
    id: 1,
    name: 'Alterar Tipos de Quarto',
    link: '#',
  },
  {
    id: 1,
    name: 'Adicionar Quarto',
    link: '#',
  },
];

export const Reserva = ({
  address,
  description,
  name,
  phoneNumber,
  price,
}: CardProps) => (
  <ReseverdRoom
    description={description}
    image={
      'https://i.pinimg.com/originals/5f/b3/ef/5fb3efb5cdc97fadbe78571ac55d0a90.jpg'
    }
    name={'teste'}
    price={252}
    address={'pindorama'}
    phoneNumber={'13 9999 9999'}
  >
    <LinkDoors data={links} />
  </ReseverdRoom>
);
