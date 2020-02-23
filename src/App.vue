<template>
  <div id="app">
    <div class="left">
      <Dashboard />
    </div>
    <div class="right">
      <About />
    </div>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue';
import About from './components/About';
export default {
  name: 'App',
  components: {
    Dashboard, About
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: space-between;
}
.right{
  width: 100%;
} 
@media(min-width:768px){
  .right{
    width: 80%;
  }
}
</style>
