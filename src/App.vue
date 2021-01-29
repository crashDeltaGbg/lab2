<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
  padding: 30px;
  text-align: left;
  width: 60vw;
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
