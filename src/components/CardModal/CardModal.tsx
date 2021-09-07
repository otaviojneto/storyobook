import React, { useState } from 'react';
import CardInfo from '../../microComponents/CardInfo';
import { CardInfoProps } from '../../microComponents/CardInfo/CardInfo';
import { SwiperSlide } from 'swiper/react';

import SwiperCore, {
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';

import { Content, Swiper } from './styles';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import { Close, Container, Header, Modal } from './styles';

SwiperCore.use([
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
]);

export type RatingProps = CardInfoProps & {
  isOpen?: boolean;
};

const CardModal: React.FC<RatingProps> = ({ Img }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CardInfo Img={Img} onClick={() => setIsOpen(true)} />

      {isOpen && (
        <Modal>
          <Container>
            <Header>
              <h1>Titulo</h1>

              <Close onClick={() => setIsOpen(false)} />
            </Header>

            <Content>
              <Swiper
                navigation={true}
                slidesPerView="auto"
                spaceBetween={18}
                pagination={{ clickable: true }}
                centeredSlides={true}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
              >
                <SwiperSlide>
                  oioioiioiooioioiiioiooooooooooo
                </SwiperSlide>
                <SwiperSlide>
                  oioioiioiooioioiiioiooooooooooo
                </SwiperSlide>
                <SwiperSlide>
                  oioioiioiooioioiiioiooooooooooo
                </SwiperSlide>
              </Swiper>





              <div>
                oioioioi
              </div>
            </Content>
          </Container>
        </Modal>
      )}
    </>
  );
};

export default CardModal;
