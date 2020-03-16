<template>
    <div id="app" @mousemove="movement">
      <div class="cursor" ref="cursor"></div>
      <div class="left">
        <Dashboard />
      </div>
      <div class="right">
        <transition>
        <router-view >
        
        </router-view>
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
  },
  data(){
    return{
      x: 0,
      y: 0
    }
  },
  methods:{
    movement: function(event){
      let cursor = this.$refs.cursor;
      this.x = event.clientX;
      this.y = event.clientY;
      cursor.style.left = this.x + 'px';
      cursor.style.top = this.y + 'px';
    }
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
  z-index: 3;
}
.right {
  position: relative;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
      width: 80%;
  }
}
.cursor{
  position: fixed;
  width: 50px;
  height: 50px;
  border: 2px solid rgba(99, 50, 246, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  position: relative;
}
.cursor:before{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '•';
  color: rgba(99, 50, 246, 0.5);
  font-size: 30px;
  display: grid;
  place-items: center;
}
@media(max-width: 768px){
    .cursor{
      display: none;
    }
  }
</style>
