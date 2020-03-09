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
  props:{
    project:{
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.singleProject {
  width: 95%;
  max-width: 1400px;
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
    img {
      width: 100%;
      box-shadow: 0 15px 30px 0 rgba(99, 50, 246, 0.2);
      border-radius: 10px;
    }
  }
  .goto-links {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(99, 50, 246, .3);
    border-radius: 10px;

    a {
      font-size: 12px;
      padding: 10px 15px;
      text-decoration: none;
      border: 1px solid #f7f7f7;
      border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 15px 30px 0 rgba(99, 50, 246, .3);
      margin: 10px;
    }
  }
}
</style>