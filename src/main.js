import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.directive('scroll', {
  inViewport(elem) {
    const coords = elem.getBoundingClientRect();
    const windowHeight = document.documentElement.clientHeight;
    const topVisible = coords.top > 0 && coords.top < windowHeight;
    const bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    return topVisible || bottomVisible;
  },
  inserted(el, binding) {
    // console.log('in inserted', el);
    // console.log(binding);
    el.classList.add(binding.value.beforeEnter);
    const f = function f() {
      // console.log('in onscroll', el);
      let hasRun = false;
      if (!hasRun && binding.def.inViewport(el)) {
        hasRun = true;
        console.warn('start animation', el);
        binding.value.enter.split(' ')
          .forEach(c => el.classList.add(c));
        binding.value.beforeEnter.split(' ')
          .forEach(c => el.classList.remove(c));
        // el.setAttribute('style', 'opacity: 1; transform: translate3d(0, 0, 0)');

        console.warn('window.removeEventListener');
        window.removeEventListener('scroll', f);
      }
      // if (window.scrollY > binding.value.end) {
      //   console.log("window.removeEventListener");
      //   window.removeEventListener("scroll", f);
      // }
    };
    console.log('window.addEventListener');
    window.addEventListener('scroll', f);
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
