<template>
  <div class="menu">
    <div class="menu__list">
      <nuxt-link to="/" class="menu__item">главная</nuxt-link>
      <nuxt-link to="/" class="menu__item">о нас</nuxt-link>
      <nuxt-link to="/" class="menu__item">акции</nuxt-link>
      <nuxt-link to="/" class="menu__item">цены</nuxt-link>
      <nuxt-link to="/" class="menu__item">гарантия</nuxt-link>

    </div>
  </div>
</template>



<style>
  .menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.966);  
    z-index: 999; 
  }
  .menu__list {
    width: 100%;
    height: 100%;
    min-height: 500px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .menu__item {
    color: #000;
    text-align: center;
    font-size: 50px;
    font-family: '2';
    padding: 5px;
    margin-bottom: 10px;
  }

</style>

<script>
import { gsap } from "gsap";
export default {

  // created() {
    
  // },

  mounted() {

    // Функция срабатывания один раз по клику
    function hasClass(el, cls) {
        return (
          el.className &&
          new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className) 
        );
    };

    // Поиск элементов по классу
    let menuBtm = document.querySelector('.header__nav__item__menu');
    let menu = document.querySelector('.menu');
    let hamburger = document.querySelector('.hamburger');

    // is-active

    // Функция срабатывания один раз по клику и условия срабатывания один раз
    menuBtm.onclick = () => {

      if (hasClass(menu, "active")) {

      let tl = gsap.timeline();
      tl.fromTo(menu, .5, { y: 0}, {ease: "power4.out", display: 'none', y: "-100%"});
      menu.classList.remove("active");
      hamburger.classList.remove("is-active"); 

      } else {

      let tl = gsap.timeline();
      tl.fromTo(menu, .5, {display: 'block', y: "-100%"}, {ease: "power4.out", y: 0});
      menu.classList.add("active");
      hamburger.classList.add("is-active");

      }   
      
    };

   
  }
}
</script>