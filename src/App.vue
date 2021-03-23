<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Main></Main>
    <CheckList></CheckList>
  </div>
</template>

<script>
import Main from './components/time_Main.vue'
import CheckList from './components/time_CheckList.vue'
export default {
  name: 'App',
  components: {
    Main,
    CheckList
  }
}
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
