import candiesImg from "../../assets/candies.png"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Container, Rectangle} from "./styles"
import {Header} from "../../components/Header"
import {Card} from "../../components/Card"
import {Section} from "../../components/Section"
import {Footer} from "../../components/Footer"

export function Home() {
  return (
    <Container>
      <Header/>

      <main>
        <Rectangle>
          <img src={candiesImg} alt="" />

          <div>
            <h1>Sabores inigualáveis</h1>
            <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
          </div>
        </Rectangle>

        <Section title="Pratos principais" />
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={300}
            slidesPerView={4}
            onSwiper={(swiper) => console.log(swiper)}
          >
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          </Swiper>

        <Section title="Sobremesas" />
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            spaceBetween={300}
            slidesPerView={4}
            onSwiper={(swiper) => console.log(swiper)}
          >
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          </Swiper>

        <Section title="Bebidas" />
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            spaceBetween={300}
            slidesPerView={4}
            onSwiper={(swiper) => console.log(swiper)}
          >
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          <SwiperSlide><Card /></SwiperSlide>
          </Swiper>

          
      </main>

      <Footer/>
    </Container>
  )
}