import React from 'react';
import Hamburguer from '../../microComponents/Hamburguer/Hamburguer';
import { Brand, Container, Menu } from './styles';

const Nav: React.FC = () => {
  return (
    <Container>

      <Brand href="#" />


      <Hamburguer />

      <Menu>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Vendas</a>
          </li>
          <li>
            <a href="/">Aluguel</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default Nav;
