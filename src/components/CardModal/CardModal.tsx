import React, { useState } from 'react';
import CardInfo from '../../microComponents/CardInfo';
import { CardInfoProps } from '../../microComponents/CardInfo/CardInfo';
import { Modal } from './styles';

export type RatingProps = CardInfoProps & {
  isOpen?: boolean;
};

const CardModal: React.FC<RatingProps> = ({ Img }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CardInfo Img={Img} />

      {isOpen && (
        <Modal>
          <img
            src="https://www.star.ind.br/_libs/imgs/thumbs2/18639.jpg"
            alt=""
          />
        </Modal>
      )}
    </>
  );
};

export default CardModal;
