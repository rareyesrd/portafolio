<template>
  <VueScrollProgress>
    <div id="app">
      <div class="left">
        <Dashboard />
      </div>
      <div class="right">
        <transition 
        name="fade"
        mode="out-in">
        <router-view></router-view>
        </transition>
      </div>
    </div>
  </VueScrollProgress>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
export default {
  name: "App",
  components: {
    Dashboard
  }
};
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: space-between;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.right {
  width: 100%;
  @media (min-width: 768px) {
      width: 80%;
  }
}
#progress-container-el {
  /* background */
  background-color: #44cf28 !important;
}

#progress-el {
  /* progress bar */
  background-color: red !important;
}
</style>
