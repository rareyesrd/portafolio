<template>
  <div class="projects">
    <h1>Here you can see, what i've built 💪🏾</h1>

    <transition>
      <div class="grid-projects">
        <SingleProject />
      </div>
    </transition>
  </div>
</template>

<script>
import SingleProject from "./SingleProject";
export default {
  name: "Projects",
  components: {
    SingleProject
  },
};
</script>

<style scoped lang="scss">
.projects {
  margin-top: 40px;
  h1 {
    text-align: center;
    margin-bottom: 50px
  }
  .v-enter-active {
    animation: fade 0.7s;
  }
  .v-leave-active {
    animation: fade 0.7s reverse;
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  
}
</style>