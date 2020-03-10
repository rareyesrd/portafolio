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
          img: require("../assets/projects/grafifast.png"),
          alt: "Grafifast",
          github: "/",
          demo: "http://www.grafifast.com/",
          target: false
        },
        {
          img: require("../assets/projects/metralla.png"),
          alt: "Metralla fuegos artificiales",
          github: "/",
          demo: "http://landingcontent.paginasamarillas.com.do/w/fuegosmetralla/index.html",
          target: false
        },
        {
          img: require("../assets/projects/livamar.png"),
          alt: "Livamar",
          github: "/",
          demo: "http://www.grupolivamar.com/",
          target: false
        },
        {
          img: require("../assets/projects/cales.png"),
          alt: "Cales Auto Services",
          github: "/",
          demo: "http://www.calesautoservicespr.com/",
          target: false
        },
        {
          img: require("../assets/projects/laGranja.png"),
          alt: "La granja",
          github: "https://github.com/rareyesrd",
          demo: "https://compassionate-mcclintock-5fe136.netlify.com",
          target: true
        },
        {
          img: require("../assets/projects/eya.png"),
          alt: "E y A",
          github: "/",
          demo: "http://landingcontent.paginasamarillas.com.do/w/eyacentrodeservicios/index.html",
          target: false
        },
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