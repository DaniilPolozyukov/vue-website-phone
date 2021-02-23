<template>
<div class="container-main">
    <div class="hero">
      <span class="hero__wellcome">Добро пожаловать</span>
      <h1 class="hero__h1">Ремонт iPhone с выездом мастера по Москве и МО</h1>
      <div class="hero__preem">
        <h2>Срочный выезд в течении часа</h2>
        <h2>В любую точку Москвы или области</h2>
        <h2>Цены под ключ</h2>
        <h2>Ремонт при Вас</h2>
      </div>
    </div> 
    
<div class="main__slider">
  <div class="swiper-wrapper main__slider__wrapper">

    <div class="swiper-slide main__slider__item lazy" data-src="https://fix163.ru/wp-content/uploads/2020/06/steklo-iphone.jpg">
      <div class="main__slider__item__header" >Замена экран (стекла дисплея) iPhone</div>
      <div class="main__slider__item__desc">Подробный прайс на все модели айфонов</div>
      <nuxt-link class="main__slider__item__btm" to="/zamena-stekla-ekrana-displeya-iphone">Подробнее</nuxt-link>
    </div>  

    <div class="swiper-slide main__slider__item">
      <div class="main__slider__item__header">Замена батареи (аккумулятора) iPhone</div>
      <div class="main__slider__item__desc">Подробный прайс на все модели айфонов</div>
      <nuxt-link class="main__slider__item__btm" to="/">Подробнее</nuxt-link>
    </div>

    <div class="swiper-slide main__slider__item">
      <div class="main__slider__item__header">Замена динамика (спикера) iPhone</div>
      <div class="main__slider__item__desc">Подробный прайс на все модели айфонов</div>
      <nuxt-link class="main__slider__item__btm" to="/">Подробнее</nuxt-link>
    </div>

    <div class="swiper-slide main__slider__item">
      <div class="main__slider__item__header">Замена корпуса (рамки) iPhone</div>
      <div class="main__slider__item__desc">Подробный прайс на все модели айфонов</div>
      <nuxt-link class="main__slider__item__btm" to="/">Подробнее</nuxt-link>
    </div>

    <div class="swiper-slide main__slider__item">
      <div class="main__slider__item__header">Замена камеры (основной) iPhone</div>
      <div class="main__slider__item__desc">Подробный прайс на все модели айфонов</div>
      <nuxt-link class="main__slider__item__btm" to="/">Подробнее</nuxt-link>
    </div>
    
  </div>
  <div class="swiper-pagination"></div>
  
</div>

</div>
</template> 
   
<script>
// import Navbar from '~/components/Navbar.vue';

import lazy from "~/assets/js/lazy.js";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import { gsap } from "gsap";

// import '~/assets/js/swiper.js';

export default {
  // components: {
  //   Navbar 
  // }
  mounted() {

    lazy(); 

    let tl = gsap.timeline();

    tl.to(".hero",0.3,{opacity:1})
    .from(".hero__wellcome",0.3,{opacity:0,y:-100},)
    .from(".hero__h1",0.3,{opacity:0,y:100})
    .staggerFrom(
      '.hero__preem h2',
      0.3,
      {opacity:0, y:100},
      0.1
    ); 

    tl.to(".hero",0.3, { opacity:0, onStart() {
      startSlide()
    }}, 2)
    


    function startSlide() {  
      let tl = gsap.timeline();

      tl.to('.hero',0.3,{x: '-100%', opacity:0, display: 'none', onComplete(){
      let swiper = new Swiper('.main__slider', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 20, 
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          480: { 
            slidesPerView: 1,
            spaceBetween: 1,
          },
          640: { 
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        } 
      }); 
      }})

      .fromTo(
        ".main__slider", 
        0.3, 
        {opacity: 0},
        {opacity: 1}
      );
    }; 
   

     
  }
}
</script>

<style>
.container-main {
  display: flex;
  width: 100%;
}
.hero {
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
.hero__wellcome {
  margin-bottom: 30px;
}
.hero__h1 {
  font-family: '2'; 
  font-size: 70px;
  /* font-size: 50px; */
}
.main__slider {
  opacity: 0; 
  flex: 1;
  overflow: hidden;  
  height: 100vh; 
  position: relative;
}
.main__slider__wrapper {
  align-items: center;
  position: relative;
  width: 100%;
}
.main__slider__item {
  height: auto;
  min-height: 260px;
  width: 100%;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover; 
  backdrop-filter: blur(20px);
  box-shadow: 2px 3px 16px #d0d0d0;
}
.main__slider__item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.616);
  z-index: -1; 
}
.main__slider__item__header {
  font-size: 30px;
  min-height: 100px;
  font-family: '2';
  text-align: center;
}
.main__slider__item__desc {
  font-size: 16px;
  font-family: '1';
  color: #333;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.main__slider__item__btm {
  padding: 25px;
  font-size: 18px;
  background: #000;
  color: #fff;
  text-align: center;
}

@media (max-width:768px) {
.hero__h1 {
  font-size: 40px;
}
}

</style>
