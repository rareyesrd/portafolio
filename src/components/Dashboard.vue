<template>
  <div class="Dashboard">
    <div class="menu" v-on:click="toggleMenu">
      <img :src="menu[count].icon" :alt="menu[count].alt" />
    </div>
    <div class="movilNav" v-bind:class="{ active: toogle}" v-on:click="toggleMenu">
      <div class="nav-content">
        <div class="logo">
          <img :src="logo.img" alt="logotipo" />
        </div>
        <ul class="nav-links">
          <li v-for="link in navLinks" :key="link">
            <router-link :to="{ name: link }">{{link}}</router-link>
            <hr />
          </li>
        </ul>
        <ul class="social-media">
          <li v-for="(social, index) in socialLinks" :key="index">
            <a :href="social.link" target="_blank">
              <img :src="social.red" :alt="social.alt" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: [],
  data() {
    return {
      toogle: false,
      count: 0,
      menu: [
        {
          icon: require("../assets/menu-hamburger.svg"),
          alt: "Menu-hamberger"
        },
        {
          icon: require("../assets/arrow-left.svg"),
          alt: "Arrow left"
        }
      ],
      logo: {
        img: require("../assets/logo.png"),
        alt: "logo"
      },
      navLinks: ["About", "Projects", "Contact"],
      socialLinks: [
        {
          red: require("../assets/facebook-logo.svg"),
          link: "https://www.facebook.com/Rafreye",
          alt: "facebook"
        },
        {
          red: require("../assets/instagram-logo.svg"),
          link: "https://www.instagram.com/rarepz/",
          alt: "instagram"
        },
        {
          red: require("../assets/youtube-logo.svg"),
          link: "https://www.youtube.com/channel/UCy1yRc4KyhzOwKn-bZJiIqA",
          alt: "youtube"
        },
        {
          red: require("../assets/linkedin-logo.svg"),
          link:
            "https://www.linkedin.com/in/rafael-alexander-reyes-perez-499924186/",
          alt: "linkedin"
        }
      ]
    };
  },
  methods: {
    toggleMenu() {
      if (!this.toogle) {
        this.count = 1;
        this.toogle = !this.toogle;
      } else {
        this.count = 0;
        this.toogle = !this.toogle;
      }
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Ubuntu:300,400,400i,500,700&display=swap");
.Dashboard {
  width: 50%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
.nav-content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(70, 62, 129, 0.8);
  transform: translateX(0%);
  z-index: 1;
}
.menu {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 35px;
  z-index: 2;
  animation: toogleMenu 0.6s ease-in .2s;
}
.logo img {
  width: 100%;
  max-width: 170px;
}
ul {
  list-style: none;
}
ul.nav-links {
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
ul.nav-links li a {
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
}
.social-media {
  width: 80%;
  display: flex;
  justify-content: space-around;
}
.social-media li {
  width: 25px;
  height: 28px;
  border-radius: 50%;
  background-color: rgba(70, 62, 129, 0.055);
  position: relative;
}
.social-media li:hover {
  background-color: rgba(70, 62, 129, 0.815);
  transition: all 0.3s ease-out;
}
.social-media a {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.social-media a img {
  width: 15px;
}
@keyframes toogleMenu {
  0% {
    transform: translateX(-600px);
  }

  100% {
    transform: translateX(0%);
  }
}
@media (min-width: 768px) {
  .Dashboard {
    width: 20%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    font-family: "Ubuntu", sans-serif;
  }
  .menu {
    display: none;
  }
  .nav-content {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(73, 7, 143, 0.9);
    transform: translateX(0%);
  }
}
@media (max-width: 768px) {
  .movilNav {
    display: none;
    animation: reverse toogleMenu 0.3s ease-in forwards;
  }
  .movilNav.active {
    display: block;
    animation: toogleMenu 0.3s ease-in forwards;
  }
}
</style>