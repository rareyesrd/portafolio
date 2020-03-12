<template>
    <div id="app">
      <div class="left">
        <Dashboard />
      </div>
      <div class="right">
        <transition>
        <router-view></router-view>
        </transition>
      </div>
    </div>
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
  color: rgba(73, 7, 143, 0.322);
}
.v-enter-active{
  animation: bounceIn .5s;
}
.v-leave-active {
   animation: bounceIn .5s reverse;
}
@keyframes bounceIn{
  0%{
    transform:scale(0.1);
    opacity: 0;
  }
  60%{
      transform:scale(1.2);
      opacity: .5;
  }
  100%{
      transform: scale(1);
    opacity: 1;

  }
}
.left{
  z-index: 1;
}
.right {
  position: relative;
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
