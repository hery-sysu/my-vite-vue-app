<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/second">Second</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html, body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

div.nav {
  height: 50px;
  font-size: 20px;
}

div.nav a {
  margin: auto 20px;
  display: inline-block;
  height: 100%;
  line-height: 100%;
}

</style>
