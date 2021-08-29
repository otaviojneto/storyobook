import React, { useState } from 'react';
import { Button } from '../../microComponents';

import { IcCoffe, IcPencil, IcPerson } from '../../icons';

import {
  CardName,
  Container,
  Content,
  Description,
  Image,
} from './styles';

export type BedroomProps = {
  name: string;
  image: string;
};

const DescriptionHotel = [
  ' Café da Manhã',
  ' Wi-Fi Grátis',
  ' Estacionamento',
  ' Piscina',
  ' Café da Manhã',
  ' Wi-Fi Grátis',
];

const Bedroom: React.FC<BedroomProps> = ({ name, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Image src={image} />

      <Content>
        <h4>{name}</h4>

        <CardName>
          <div>
            <img src={IcPerson} alt="" />

            <p>Maria Leal</p>
          </div>

          <Button
            color="transparent"
            colorText="#0C83D9"
            size="minimum"
            variant="outline"
            startIcon={IcPencil}
          >
            Editar
          </Button>
        </CardName>

        <h5>2 adultos, 1 criança (5 Anos)</h5>

        <Description isOpen={isOpen}>
          <div>
            <img src={IcCoffe} />
            {DescriptionHotel.map((item, index) => {
              if (index <= 2) {
                return <p> {item} </p>;
              }

              return isOpen && <p> {item} </p>;
            })}
          </div>

          <Button
            variant="text"
            size="minimum"
            colorText="#9C9C9C"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <> ver menos </> : <> ver mais</>}
          </Button>
        </Description>

        <h6>Cancelamento grátis até 20/08</h6>
      </Content>
    </Container>
  );
};

export default Bedroom;
