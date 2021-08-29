import React from 'react';
import InputText from './InputText';

export default {
  title: 'Micro Components/Input',
};

const Filter = [
  {
    value: 'SP',
    label: 'São Paulo',
  },
  {
    value: 'SC',
    label: 'Santa Catarina',
  },

  {
    value: 'SP',
    label: 'São Paulo',
  },
  {
    value: 'AC',
    label: 'Acre',
  },
  {
    value: 'SP',
    label: 'Santos',
  },
  {
    value: 'RJ',
    label: 'Rio de Janeiro',
  },
  {
    value: 'ES',
    label: 'Espirito Santo',
  },
  {
    value: 'AM',
    label: 'Amazonas',
  },
  {
    value: 'GO',
    label: 'Goiás',
  },
];

export const Input = () => (
  <>
    <InputText title="Teste" data={Filter} />
  </>
);
