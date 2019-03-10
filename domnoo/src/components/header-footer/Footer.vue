<template>
  <footer>
    <div class="container">
      <div>
        <img :src="logoIcon" v-scroll-reveal.reset>
        <div class="contact">
          <div v-scroll-reveal.reset="{delay: 500}">Call us</div>
          <div v-scroll-reveal.reset="{delay: 1000}">222-7777</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '../../assets/images/logo.png';

export default {
  data() {
    return {
      logoIcon: Logo,
    };
  },
};
</script>
