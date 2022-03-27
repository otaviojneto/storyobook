import React from 'react';
import { Input, Label, Struture } from './styles';

const InputText: React.FC = () => {
  return (
    <Struture>
      <Input type="text" placeholder="email" />
      <Label>email</Label>
    </Struture>
  );
};

export default InputText;
