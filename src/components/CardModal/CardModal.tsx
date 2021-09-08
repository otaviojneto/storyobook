import React, { useState } from 'react';
import CardInfo from '../../microComponents/CardInfo';
import { CardInfoProps } from '../../microComponents/CardInfo/CardInfo';
import { SwiperSlide } from 'swiper/react';

import SwiperCore, {
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  A11y,
} from 'swiper';

import { Content, Image, Infos, Rooms, Swiper } from './styles';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/thumbs/thumbs.min.css';

import { Close, Container, Header, Modal } from './styles';

SwiperCore.use([
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  A11y,
]);

export type RatingProps = CardInfoProps & {
  isOpen?: boolean;
};

const CardModal: React.FC<RatingProps> = ({ Img }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
              <Rooms>
                <Swiper
                  navigation={true}
                  slidesPerView="auto"
                  thumbs={{ swiper: thumbsSwiper }}
                >
                  <SwiperSlide>
                    <Image
                      src="https://www.ciadomolde.com.br/image/cache/data/5550000008544-200x200.jpg"
                      alt="car"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image
                      src="https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2013/07/31/colpatria1.jpg"
                      alt="car"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="https://www.ciadomolde.com.br/image/cache/data/5550000008544-200x200.jpg"
                      alt="car"
                    />
                  </SwiperSlide>
                </Swiper>

                <Swiper
                  onSwiper={() => setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView="auto"
                  freeMode
                  watchSlidesVisibility
                  watchSlidesProgress
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                  }}
                >
                  <SwiperSlide>
                    <img
                      src="https://www.ciadomolde.com.br/image/cache/data/5550000008544-200x200.jpg"
                      alt="car"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src="https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2013/07/31/colpatria1.jpg"
                      alt="car"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://www.ciadomolde.com.br/image/cache/data/5550000008544-200x200.jpg"
                      alt="car"
                    />
                  </SwiperSlide>
                </Swiper>
              </Rooms>

              <Infos>
                <p>descrição</p>
                <p>quartos</p>
                <p>garagem</p>
                <p>localização</p>
                <p>Preço</p>
              </Infos>
            </Content>
          </Container>
        </Modal>
      )}
    </>
  );
};

export default CardModal;
