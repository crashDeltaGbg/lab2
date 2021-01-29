<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Fetch/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Fetch from '@/components/Fetch.vue'

export default {
  name: 'Home',
  components: {
    Fetch,
    // HelloWorld
  }
}
</script>
