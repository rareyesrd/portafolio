<template>
  <div id="app">
    <div class="left">
      <Dashboard />
    </div>
    <div class="right">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue';
export default {
  name: 'App',
  components: {
    Dashboard, 
  },
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
