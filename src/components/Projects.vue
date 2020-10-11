<template>
  <div class="projects">
    <h1>Here you can see, what i've built 💪🏾</h1>
    <transition>
      <div class="grid-projects">
        <SingleProject :project="project" />
      </div>
    </transition>
    <Copyright />
  </div>
</template>

<script>
import Copyright from "./Copyright";
import SingleProject from "./SingleProject";
export default {
  name: "Projects",
  components: {
    SingleProject,
    Copyright
  },
  data() {
    return {
      project: [
         {
          img: require("../assets/projects/landingPage.png"),
          alt: "Landing Page",
          github: "/",
          demo: "https://dazzling-babbage-7af093.netlify.com/",
          target: false
        },
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
          demo:
            "http://landingcontent.paginasamarillas.com.do/w/fuegosmetralla/index.html",
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
          demo:
            "http://landingcontent.paginasamarillas.com.do/w/eyacentrodeservicios/index.html",
          target: false
        },
        {
          img: require("../assets/projects/raimobiliarias.png"),
          alt: "RA Inmobiliarias",
          github: "/",
          demo: "http://www.rainmobiliaria.com.do/",
          target: false
        },
        {
          img: require("../assets/projects/dispensarioantituberculosoadultos.png"),
          alt: "Dispensario antituberculos o adultos",
          github: "/",
          demo:
            "http://landingcontent.paginasamarillas.com.do/w/dispensarioantituberculosoadultos.com/",
          target: false
        },
          {
            img: require("../assets/projects/vaUniforms.png"),
            alt: "Va Uniforms",
            github: "/",
            demo: "http://www.avauniformspr.com/",
            target: false
          },
        {
          img: require("../assets/projects/drgarridomendez.png"),
          alt: "Dr Garrido Mendez",
          github: "/",
          demo: "http://www.drgarridomendez.com/",
          target: false
        },
        {
          img: require("../assets/projects/duotecheirl.png"),
          alt: "Duotech irl",
          github: "/",
          demo: "http://duotecheirl.com/",
          target: false
        },
        {
          img: require("../assets/projects/permaca.png"),
          alt: "Permaca",
          github: "/",
          demo: "http://www.permaca.com.do/",
          target: false
        },
        {
          img: require("../assets/projects/imecasoldadura.png"),
          alt: "Imeca soldadura",
          github: "/",
          demo: "http://www.imecasoldadura.com/",
          target: false
        },
        {
          img: require("../assets/projects/learningcenter.png"),
          alt: "Learning Center",
          github: "/",
          demo: "http://www.learningcenterdr.com/",
          target: false
        },
        {
          img: require("../assets/projects/plantaselectricas.png"),
          alt: "Plantas eléctricas",
          github: "/",
          demo: "http://www.plantaselectricasdominicanas.com/",
          target: false
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.projects {
  // background: url('../assets/bg-project.png') no-repeat center center/cover;
  height: 100%;
  color: #000;
  margin-top: 40px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  h1 {
    text-align: center;
    margin-bottom: 50px;
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