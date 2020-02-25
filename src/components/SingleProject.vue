<template>
  <div class="singleProject">
    <div v-for="prop in project" :key="prop.alt" class="project-view">
      <img :src="prop.img" :alt="prop.alt" />
      <div class="goto-links">
        <a :href="prop.github" target="_blank">GITHUB</a>
        <a :href="prop.demo" target="_blank">DEMO</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProject",
  data() {
    return {
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
    };
  }
};
</script>

<style scoped lang="scss">
.singleProject {
  box-shadow: 2px 2px 1px #f3f3f3;
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  .project-view {
    img {
      width: 100%;
    }
  }
  .goto-links {
    display: flex;
    justify-content: space-around;
    a{
        background-color: #f3f3f3;
    }
  }
}
</style>