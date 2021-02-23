<template>
  <div class="page">
    <Navbar />
    <Nuxt />
    <Menu />
  </div> 
</template>

<script>
import Navbar from '~/components/navbar.vue';
import Menu from '~/components/menu.vue'; 

export default {
  components: {
    Navbar, Menu  
  }
}
</script>

<style>
/* ::-webkit-scrollbar {
    width: 12px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
} */
body {
  font-family: '2'; 
}
h1 {
  margin: 0;
  padding: 0;
}
.page {
  padding-left: 70px;
  padding-right: 70px;
  overflow: hidden;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
@media (max-width:768px) {
.page {
  padding-left: 10px;
  padding-right: 10px;
}
}
</style>
