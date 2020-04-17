<template>
  <div id="app">
    <HelloWorld/>
      <router-link to="/"></router-link>
      <router-link to="/detail/:Pid"></router-link>
    <router-view/>
    <div class="container-fluid kaki">
      <Footer/>
    </div>
  </div>
</template>
<script>

import Footer from './components/Footer.vue'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {HelloWorld, Footer}
}
</script>

<style>

</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  p, h1, h2, h3, h4
  {
    color: #f1f3f4;
  }
  .kaki {
    margin-top: 30px;
    text-align: center;
    height: auto;
    width: 50%;
    padding: 10px;
  }
</style>
  