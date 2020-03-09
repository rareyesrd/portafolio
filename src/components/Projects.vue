<template>
  <div class="projects">
    <h1>Here you can see, what i've built 💪🏾</h1>

    <transition>
      <div class="grid-projects">
        <SingleProject :project="project"/>
      </div>
    </transition>
    <Copyright />
  </div>
</template>

<script>
import Copyright from './Copyright'
import SingleProject from "./SingleProject";
export default {
  name: "Projects",
  components: {
    SingleProject, Copyright
  },
  data(){
    return{
      project: [
        {
          img: require("../assets/projects/laGranja.png"),
          alt: "La granja",
          github: "https://github.com/rareyesrd",
          demo: "http://rarepz.com/"
        },
        {
          img: require("../assets/projects/laGranja.png"),
          alt: "La granja",
          github: "https://github.com/rareyesrd",
          demo: "http://rarepz.com/"
        },
        {
          img: require("../assets/projects/laGranja.png"),
          alt: "La granja",
          github: "https://github.com/rareyesrd",
          demo: "http://rarepz.com/"
        },
        {
          img: require("../assets/projects/laGranja.png"),
          alt: "La granja",
          github: "https://github.com/rareyesrd",
          demo: "http://rarepz.com/"
        },
        {
          img: require("../assets/projects/laGranja.png"),
          alt: "La granja",
          github: "https://github.com/rareyesrd",
          demo: "http://rarepz.com/"
        },
        {
          img: require("../assets/projects/laGranja.png"),
          alt: "La granja",
          github: "https://github.com/rareyesrd",
          demo: "http://rarepz.com/"
        }
      ]
    }
  }
};
</script>

<style scoped lang="scss">
.projects {
  color: #000;
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