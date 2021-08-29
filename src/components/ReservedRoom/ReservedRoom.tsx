import React, { ReactNode } from 'react';
import Price from '../Price';
import {
  Bagde,
  Box,
  Button,
  RatingView,
} from '../../microComponents';
import {
  IcCalendar,
  IcEmail,
  IcLocalization,
  IcPhone,
} from '../../icons';

import {
  BoxHeader,
  Card,
  Container,
  Content,
  List,
  Reserv,
  Value,
} from './styles';

export type DataCardProps = {
  image?: string;
  name?: string;
  address?: string;
  email?: string;
  description?: ReactNode;
  phoneNumber?: string;
  price?: number;
};

const ReservedRoom: React.FC<DataCardProps> = ({
  address,
  children,
  name,
  image,
  phoneNumber,
}) => {
  return (
    <>
      <BoxHeader>
        <Bagde color={'green'}>Confirmado</Bagde>

        <Reserv>
          <h3>
            Numero da Reserva :<strong> RES000071-4465</strong>
          </h3>
        </Reserv>

        <Reserv>
          <img src={IcCalendar} alt="calendar" />

          <h3>
            <strong>ter 11 Mar 2021</strong> -
            <strong> sáb 15 Mar 2021</strong>
          </h3>

          <h4>
            Noites: <strong>3</strong>
          </h4>
        </Reserv>

        <Reserv>
          <h3>
            Quartos : <strong>1</strong>
          </h3>

          <h4>
            Hóspedes : <strong>1</strong>
          </h4>
        </Reserv>
      </BoxHeader>

      <Container>
        <Content>
          <img src={image} alt={name} />

          <Card>
            <div>
              <RatingView ratingValue={5} size={12} />

              <h1> {name}</h1>

              <List>
                {address && (
                  <div>
                    <img src={IcLocalization} />

                    <p>{address}</p>
                  </div>
                )}

                {phoneNumber && (
                  <div>
                    <img src={IcPhone} />

                    <p>{phoneNumber}</p>
                  </div>
                )}
              </List>

              <Button
                variant="text"
                startIcon={IcEmail}
                color="#273240"
                href=""
              >
                Enviar e-mail ao alojamento
              </Button>
            </div>

            <Value>
              <h6>Total da reserva</h6>

              <div>
                <h1>0,00</h1>

                <Button
                  marginLeft={10}
                  variant="text"
                  size="minimum"
                >
                  Ver Detalhes
                </Button>
              </div>
            </Value>
          </Card>
        </Content>

        <Box>{children}</Box>
      </Container>
    </>
  );
};

export default ReservedRoom;
