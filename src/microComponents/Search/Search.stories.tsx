import React from 'react';
import Search, { ArrayProps } from './Search';

export default {
  title: 'Micro Components/Input',
  argTypes: {
    disabled: { control: 'boolean' },
    title: { control: 'text' },
  },
};

const Filter = [
  {
    value: 'SP',
    label: 'São Paulo',
    description: 'osasco',
  },
  {
    value: 'SC',
    label: 'Santa Catarina',
    description: 'itajai',
  },

  {
    value: 'MA',
    label: 'Maranhão',
    description: 'São Luis',
  },
  {
    value: 'AC',
    label: 'Acre',
    description: 'Acrelândia',
  },
  {
    value: 'SP',
    label: 'São Paulo',
    description: 'Santos',
  },
  {
    value: 'RJ',
    label: 'Rio de Janeiro',
    description: 'Copacabana',
  },
  {
    value: 'ES',
    label: 'Espirito Santo',
    description: '	Vila Velha',
  },
  {
    value: 'AM',
    label: 'Amazonas',
    description: 'Manaus',
  },
  {
    value: 'GO',
    label: 'Goiás',
    description: 'Pineropolis',
  },
];

export const Searchs = ({ disabled, title }: ArrayProps) => (
  <>
    <Search
      title={title}
      placeholder={'Destino'}
      onValue={Filter}
      disabled={disabled}
    />
  </>
);
