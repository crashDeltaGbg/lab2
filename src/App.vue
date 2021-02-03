<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  name: 'app'
}

</script>

<style>

#app {
  align-items: center;
  color: #041220;
  display: flex;
  flex-direction: column;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
  max-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}

#nav {
  /* align-self: flex-start; */
  padding: 30px;
  text-align: left;
  width: 90vw;
}

#nav a {
  font-weight: bold;
  color: #041220;
}

#nav a.router-link-exact-active {
  color: #44056d;
}

body {
  margin: 0;
}

</style>
