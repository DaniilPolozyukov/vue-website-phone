<template>
<div>
  <header class="header__nav">
    <div class="header__nav__item">
      <nuxt-link to="/" class="header__nav__item__logo">РЕМОНТ АЙФОН.РФ</nuxt-link>
    </div>
    <div class="header__nav__item">
      <a href="tel:7999999999" class="header__nav__item__phone">+7 962 (940)-90-19</a>
    </div>
    <div class="header__nav__item">
      <div class="header__nav__item__menu">
        <div class="hamburger hamburger--collapse">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>
</template>

<script>
import { gsap } from "gsap";
export default {
  mounted() {
    let tl = gsap.timeline();
    tl.to(".header__nav", 1, { opacity: 1, y: 100 })
  }
}
</script>

<style>
.header__nav {
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 24px;
  position: fixed;
  top: -100px;
  left: 0;
  right: 0;
  margin: auto;
  height: auto;
  padding-left: 70px;
  padding-right: 70px;
  background: rgb(255, 255, 255, 0.007);
  backdrop-filter: saturate(180%) blur(20px);
}

.header__nav__item {
  flex: 1;
}

.header__nav__item__logo {
  text-align: left;
  color: #000;
  height: 100%;
  display: flex;
  align-items: center;
}

.header__nav__item__phone {
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  height: 100%;
}

.header__nav__item__menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  cursor: pointer;
}

.hamburger {
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}

.hamburger:hover {
  opacity: 0.7;
}

.hamburger.is-active:hover {
  opacity: 0.7;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #000;
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before {
  top: -10px;
}

.hamburger-inner::after {
  bottom: -10px;
}

/*
   * Collapse
   */
.hamburger--collapse .hamburger-inner {
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--collapse .hamburger-inner::after {
  top: -20px;
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
}

.hamburger--collapse .hamburger-inner::before {
  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--collapse.is-active .hamburger-inner {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.hamburger--collapse.is-active .hamburger-inner::after {
  top: 0;
  opacity: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
}

.hamburger--collapse.is-active .hamburger-inner::before {
  top: 0;
  transform: rotate(-90deg);
  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
}

@media (max-width:768px) {
  .header__nav {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
  }

}

@media (max-width:400px) {
  .header__nav__item__logo {
    font-size: 10px;
  }

}
</style>
