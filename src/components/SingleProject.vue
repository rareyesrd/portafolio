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
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  .project-view {
    -webkit-box-shadow: 3px 42px 61px -20px rgba(73, 7, 143, 1);
    -moz-box-shadow: 3px 42px 61px -20px rgba(73, 7, 143, 1);
    box-shadow: 3px 42px 61px -20px rgba(73, 7, 143, 1);
    border-radius: 10px;
    img {
      width: 100%;
    }
  }
  .goto-links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f3f3f3;
    a {
      font-size: 12px;
      padding: 10px 15px;
      text-decoration: none;
      border: 1px solid #5323c4;
      border-radius: 10px;
      margin: 10px;
    }
  }
}
</style>