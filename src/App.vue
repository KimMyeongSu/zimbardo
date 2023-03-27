<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <IndexMain></IndexMain>
  </div>
</template>

<script>
import IndexMain from "./components/time_Main.vue";

export default {
  name: "App",
  components: {
    IndexMain,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
