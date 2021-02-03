<template>
  <div id="main">
    <h1>Contact us</h1>
  <div v-if="userName">
    <p>Hello, {{ userName }}. We're here to help. Nah&hellip; j/k. Lol.</p>
    <h2>Search our FAQ</h2>
    <dl>
      <dt>Q:</dt>
      <dd>My problem isn't listed here.</dd>
      <dt>A:</dt>
      <dd>Naw&hellip; that's too bad. Try contacting us. Lol. You can't.</dd>
    </dl>
    <Props :init="false"></Props>
  </div>
  <div v-else>
    <p><input placeholder="Your name here" v-model="name"/>&nbsp;<input @click="onClick()" type="button" value="Ok"/></p>
    </div>
  </div>
</template>

<script>

import Props from '../components/Props.vue'

export default {
  components: {
    Props
  },
  data() {
    return {
      userName: null,
      name: null
    }
  },
  methods: {
    onClick() {
      this.userName = this.name
    }
  },
  name: 'Contact'
}

</script>

<style scoped>

#main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    max-height: 100vh;
    width: 90vw;
}

dt {
  font-weight: bold;
}

input {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
}

</style>
