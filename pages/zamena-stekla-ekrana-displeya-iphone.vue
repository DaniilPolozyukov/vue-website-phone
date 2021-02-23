<template>
<div class="container-main">
    <div class="hero">
      <h1 class="hero__h1">Замена экран (стекла дисплея) iPhone</h1>
    </div> 
    
  <div class="main__slider">
    <div class="swiper-wrapper main__slider__wrapper">

      <div class="swiper-slide main__slider__item lazy" data-src>
        <div class="main__slider__item__header" >Замена экран (стекла дисплея) iPhone 5</div>
        <div class="main__slider__item__desc">Цена с работой и выездом от 1700 ₽</div>
        <button class="main__slider__item__btm zakaz-open">Заказать</button>
      </div>  
      
      <div class="swiper-slide main__slider__item lazy" data-src>
        <div class="main__slider__item__header" >Замена экран (стекла дисплея) iPhone 5S</div>
        <div class="main__slider__item__desc">Цена с работой и выездом от 1700 ₽</div>
        <button class="main__slider__item__btm zakaz-open">Заказать</button>
      </div>    

      <div class="swiper-slide main__slider__item lazy" data-src>
        <div class="main__slider__item__header" >Замена экран (стекла дисплея) iPhone 5C</div>
        <div class="main__slider__item__desc">Цена с работой и выездом от 1700 ₽</div>
        <button class="main__slider__item__btm zakaz-open" >Заказать</button>
      </div> 
      
    </div>
  <div class="swiper-pagination"></div> 
  </div>

  <!-- Попап отправки заявки -->
  <div class="zayavka__hidden">
    <div class="zayavka__hidden__header">Оформите заявку</div>
    <input class="zayavka__hidden__inp" placeholder="Имя" type="text">
    <input class="zayavka__hidden__inp" placeholder="Номер телефона" type="text">
    <div class="zayavka__hidden__btm">Отправить</div>
  </div>

  <div class="overlay"></div>

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
        // loop: true,
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
      }
      }).fromTo(".main__slider", 0.3, {opacity: 0},{opacity: 1});
    }

  // let zakazOpen = document.querySelectorAll('.zakaz-open'); 

  // zakazOpen.onClick=()=>{
  //   console.log(1)
  // }

  let zayavkaHidden = document.querySelector('.zayavka__hidden');
  let OverLay = document.querySelector('.overlay');
  let array = document.querySelectorAll('.zakaz-open');

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    element.onClick=()=>{
    let tl = gsap.timeline();
 
    tl
    .fromTo(OverLay, .2 , {display: 'flex', opacity: 0}, { opacity: 1 })
    .fromTo(zayavkaHidden, .2 , {display: 'flex', y: 100, opacity: 0}, { y: 0, opacity: 1 })
    } 

  } 

  OverLay.onClick=()=>{
    let tl = gsap.timeline();
     tl
    .fromTo(OverLay, .2 , {opacity: 1}, { display: 'none', opacity: 0 })
    .fromTo(zayavkaHidden, .2 , {y: 0, opacity: 1}, { display: 'none', y: 100, opacity: 0 })
  }




  } 
};
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

/* START Попап отправки заявки */
.zayavka__hidden {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 95%;
  max-width: 500px;
  height: 290px;
  z-index: 999;
  background: rgb(255, 255, 255);
  /* display: flex; */
  flex-direction: column;
  border: 3px solid #333; 
}

.zayavka__hidden__header {
  color: #000;
  font-size: 30px;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.zayavka__hidden__inp {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px; 
}
.zayavka__hidden__btm {
  background: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin: auto; 
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
}

.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.692);
  z-index: 99;
  backdrop-filter: saturate(180%) blur(20px);
} 

/* END Попап отправки заявки */

@media (max-width:768px) {
  .hero__h1 {
    font-size: 40px;
  } 
}

</style>
