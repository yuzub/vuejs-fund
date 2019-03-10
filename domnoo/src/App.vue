<template>
  <div>
    <comp-header/>
    <div>
      <comp-featured/>
      <comp-call-us/>
    </div>
    <comp-news-letter/>
    <comp-footer/>
  </div>
</template>

<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template> -->

<script>
// import HelloWorld from './components/HelloWorld.vue';
import compHeader from './components/header-footer/Header.vue';
import compFooter from './components/header-footer/Footer.vue';
import compFeatured from './components/featured/index.vue';
import compCallUs from './components/call-us/index.vue';
import compNewsLetter from './components/news-letter/index.vue';

export default {
//   name: 'app',
  components: {
    // HelloWorld,
    compHeader,
    compFooter,
    compFeatured,
    compCallUs,
    compNewsLetter,
  },
};
</script>

<style>
  @import './assets/style.css';
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
