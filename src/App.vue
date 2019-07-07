<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img src="./assets/build-a-bot-logo.png" alt="" class="logo">
            Build-a-bot
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <HomePage />
    </main>
  </div>
</template>

<script>
import HomePage from './home/HomePage.vue';

export default {
  name: 'app',
  components: {
    HomePage,
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  /* width: 1024px; */
  width: 700px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.before-enter {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  /* transition: 2s all cubic-bezier(0.39, 0.575, 0.565, 1); */
}
.enter {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: 2s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
.bg-grey {
  background-color: grey;
}
.bg-lightgrey {
  background-color: lightgray;
}
.bg-blue {
  background-color: blue;
}
.bg-lighblue {
  background-color: lightblue;
}
.bg-skyblue {
  background-color: skyblue;
}
.bg-lightskyblue {
  background-color: lightskyblue;
}
</style>
