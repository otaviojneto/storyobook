import React from 'react';
import { IcBedroom, IcGarage, IcRuler } from '../../icons';
import { Base, Card, Footer, Image, Info } from './styles';

export type CardInfoProps = {
  Img?: string;
  onClick?: () => void;
};

const CardInfo: React.FC<CardInfoProps> = ({ Img, onClick }) => {
  return (
    <Card>
      <button onClick={onClick}>
        <Image src={Img} />

        <Base>
          <Info>
            <p>Apartamento</p>
            <h3>Endereço</h3>
            <p>Bairro,cidade</p>
            <h4>valor:</h4>
          </Info>
          <Footer>
            <div>
              <img src={IcRuler} />
              <p>M²</p>
              <h5>75 </h5>
            </div>

            <div>
              <img src={IcBedroom} />
              <p>Quartos</p>
              <h5>2</h5>
            </div>

            <div>
              <img src={IcGarage} />
              <p>Garagem</p>
              <h5>sim</h5>
            </div>
          </Footer>
        </Base>
      </button>
    </Card>
  );
};

export default CardInfo;
