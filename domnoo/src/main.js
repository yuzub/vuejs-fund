import Vue from 'vue';

import VueScrollReveal from 'vue-scroll-reveal';

import { MdButton, MdDrawer, MdCard } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

import App from './App.vue';

Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdCard);

Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: '50px',
});

Vue.config.productionTip = false;

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App),
});

// new Vue({
//   render: h => h(App),
// }).$mount('#app');
