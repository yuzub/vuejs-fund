<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" alt="">
    </div>
    <div class="get-started">
      <a href="">Get Started</a> building your first robot!
    </div>

    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ipsam fugiat enim esse nulla dignissimos dicta tenetur iure. Cumque ex nihil sunt sapiente exercitationem velit blanditiis inventore veniam dignissimos saepe?</p>
    <div v-scroll="{ beforeEnter: 'before-enter', enter: 'enter bg-grey' }"><img class="robot" src="../assets/robot-home.png" alt=""></div>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ipsam fugiat enim esse nulla dignissimos dicta tenetur iure. Cumque ex nihil sunt sapiente exercitationem velit blanditiis inventore veniam dignissimos saepe?</p>
    <div v-scroll="{ beforeEnter: 'before-enter', enter: 'enter bg-lightgrey' }"><img class="robot" src="../assets/robot-home.png" alt=""></div>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ipsam fugiat enim esse nulla dignissimos dicta tenetur iure. Cumque ex nihil sunt sapiente exercitationem velit blanditiis inventore veniam dignissimos saepe?</p>
    <div v-scroll="{ beforeEnter: 'before-enter', enter: 'enter bg-blue' }"><img class="robot" src="../assets/robot-home.png" alt=""></div>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ipsam fugiat enim esse nulla dignissimos dicta tenetur iure. Cumque ex nihil sunt sapiente exercitationem velit blanditiis inventore veniam dignissimos saepe?</p>
    <div v-scroll="{ beforeEnter: 'before-enter', enter: 'enter bg-lighblue' }"><img class="robot" src="../assets/robot-home.png" alt=""></div>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ipsam fugiat enim esse nulla dignissimos dicta tenetur iure. Cumque ex nihil sunt sapiente exercitationem velit blanditiis inventore veniam dignissimos saepe?</p>
    <div v-scroll="{ beforeEnter: 'before-enter', enter: 'enter bg-skyblue' }"><img class="robot" src="../assets/robot-home.png" alt=""></div>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ipsam fugiat enim esse nulla dignissimos dicta tenetur iure. Cumque ex nihil sunt sapiente exercitationem velit blanditiis inventore veniam dignissimos saepe?</p>
    <div v-scroll="{ beforeEnter: 'before-enter', enter: 'enter bg-lightskyblue' }"><img class="robot" src="../assets/robot-home.png" alt=""></div>


  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px;
}
</style>
