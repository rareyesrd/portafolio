<template>
  <div class="About">
    <div class="jumbotrom">
      <div class="content">
        <h3>Rafael A. Reyes</h3>
        <p>Hey, what if i tell you who i am?, i'm a student from UTESA (Universidad Tecnológica de Santiago) and i am passionated of creating things for the web.</p>
        <p>I am currently working on some simple page applications (SPA) to become a better front-end developer, i'm 21 years old and i still growing and learning new things everyday.</p>
        <p>Here i'll show you the projects i am involving of and the courses i have taken.</p>
      </div>
    </div>
    <div class="main">
      <div class="skills">
        <h3>Skills</h3>
      </div>
      <img :src="main.img" :alt="main.alt" />
    </div>
    <Copyright />
  </div>
</template>

<script>
import Copyright from "./Copyright";
export default {
  name: "About",
  props: [],
  components: {
    Copyright
  },
  data() {
    return {
      img: require("../assets/perfil.jpg"),
      alt: "Rafael Reyes",
      main: {
        img: require("../assets/about-section.svg"),
        alt: "Web Development"
      }
    };
  }
};
</script>

<style scoped>
.About {
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 30px;
}
.jumbotrom {
  height: 500px;
  background-attachment: fixed;
  background: url("../assets/header.png") no-repeat center center/cover;
  width: 100%;
  margin: 40px auto 0px;
  background-color: #fafeff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.jumbotrom .content {
  width: 100%;
}

.jumbotrom .content h3 {
  line-height: 30px;
  margin-bottom: 10px;
  font-size: 30px;
}
.jumbotrom .content p {
  font-size: 20px;
  margin-bottom: 15px;
}
.main {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.main img {
  width: 100%;
  max-width: 200px;
}
@media (min-width: 768px) {
  .jumbotrom {
    height: 330px;
    margin-top: 0px;
  }
  .jumbotrom .content {
    width: 80%;
    padding: 10px 30px;
  }
}
</style>