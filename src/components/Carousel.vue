<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';

  import { Navigation, Pagination, Autoplay } from 'swiper/modules';

  // Mark as used to avoid unused import errors
  void Swiper;
  void SwiperSlide;
  void Navigation;
  void Pagination;
  void Autoplay;
</script>

<template>
  <Swiper
    :modules="[Navigation, Pagination, Autoplay]"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    navigation
    pagination
    loop
    class="mySwiper rounded-lg shadow-lg max-w-5xl mx-auto mt-8"
  >
    <SwiperSlide>
      <img
        src="../assets/carousel-1.png"
        alt="RSA Algorithm"
        class="w-full rounded-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="../assets/carousel-2.png"
        alt="Modular Arithmetic"
        class="w-full rounded-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="../assets/carousel-3.png"
        alt="Euler's Totient Function"
        class="w-full rounded-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="../assets/carousel-4.png"
        alt="Cryptographic Hash Functions"
        class="w-full rounded-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="../assets/carousel-5.png"
        alt="Digital Signatures"
        class="w-full rounded-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="../assets/carousel.png"
        alt="Public Key Infrastructure"
        class="w-full rounded-lg"
      />
    </SwiperSlide>
  </Swiper>
</template>
