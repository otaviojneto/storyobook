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

import { Content, Rooms, Swiper } from './styles';
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
              {/* <Swiper
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
                  <img
                    src="http://placehold.jp/500x300.png"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="http://placehold.jp/500x300.png"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="http://placehold.jp/500x300.png"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper> */}

              <Rooms>
                <Swiper
                  navigation={true}
                  slidesPerView="auto"
                  pagination={{ clickable: true }}
                  thumbs={{ swiper: thumbsSwiper }}
                >
                  <SwiperSlide>
                    <img
                      src="http://placehold.jp/500x300.png"
                      alt="car"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src="https://image.shutterstock.com/image-illustration/number-300-white-on-light-260nw-1683875761.jpg"
                      alt="car"
                    />
                  </SwiperSlide>
                </Swiper>

                <Swiper
                  onSwiper={setThumbsSwiper}
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
                      src="http://placehold.jp/200x300.png"
                      alt="car"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img
                      src="http://placehold.jp/200x200.png"
                      alt="car"
                    />
                  </SwiperSlide>
                </Swiper>
              </Rooms>

              <div>oioioioi</div>
            </Content>
          </Container>
        </Modal>
      )}
    </>
  );
};

export default CardModal;
