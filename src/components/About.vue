<template>
  <div class="About">
   <vue-particles
        color="#49078f"
        :particleOpacity="0.5"
        :particlesNumber="80"
        shapeType="edge"
        :particleSize="4"
        linesColor="#49078f"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.2"
        :linesDistance="200"
        :moveSpeed="5"
        :hoverEffect="true"
        hoverMode="repulse"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    <div class="content">
      <div class="container">
        <div class="square-position">
          <div class="content">
            <div>
              <h1>Rafael</h1>
              <h1>&nbsp; &nbsp;Reyes</h1>
            </div>
            <div class="university">
              <h5>
                Student from UTESA
                <br />(Universidad Tecnologica de Santiago)
              </h5>
            </div>
          </div>
        </div>
        <div class="square-position2">
          <div class="content">
            <div class="cover-letter">
              <p>
                I get passionated on building things for the web, I’ve been learning for almost a year to became a front-end developer.
                <br />
                <br />I'm currently working on some single page applications (SPA) Here you'll see the projects i've built.
              </p>
            </div>
            <div class="skills">
              <h5>Skills</h5>
              <ul>
                <li>
                  <p>Html5 + Css3</p>
                  <progress value="90" max="100">95%</progress>
                </li>
                <li>
                  <p>Sass (scss)</p>
                  <progress value="75" max="100"></progress>
                </li>
                <li>
                  <p>Javascript</p>
                  <progress value="55" max="100"></progress>
                </li>
                <li>
                  <p>Vuejs</p>
                  <progress value="50" max="100"></progress>
                </li>
                <li>
                  <p>Firebase</p>
                  <progress value="40" max="100"></progress>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="circle-animation">
      <img src="../assets/geometry-circle.svg" alt="circle" />
    </div>-->
    <Copyright />
  </div>
</template>

<script>
import Copyright from "./Copyright";
export default {
  name: "About",
  components: {
    Copyright
  },
  data() {
    return {
      options: {
        text: {
          color: "#FFFFFF",
          shadowEnable: true,
          shadowColor: "#000000",
          fontSize: 14,
          fontFamily: "Helvetica",
          dynamicPosition: false,
          hideText: false
        },
        progress: {
          color: "#2dbd2d",
          backgroundColor: "#C0C0C0"
        },
        layout: {
          height: 35,
          width: 140,
          verticalTextAlign: 61,
          horizontalTextAlign: 43,
          zeroOffset: 0,
          strokeWidth: 30,
          progressPadding: 0,
          type: "line"
        }
      }
    };
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=PT+Sans&display=swap");
@font-face {
  font-family: "Rarepz-font";
  src: url("../assets/fonts/Monument Extended Bold.ttf");
}
.About {
  cursor: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgba(0, 0, 0, 0.89);
  background: url("../assets/bg-about.svg") no-repeat center center/cover;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  #particles-js{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media(max-width: 768px){
    background: #fff;
    cursor: default;
  }
}
.content {
  .container {
  height: 100vh;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .square-position {
      .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: flex-end;
        flex-wrap: wrap;
        div {
          padding-top: 150px;
          h1 {
            font-family: "Rarepz-font";
            font-size: 6.5rem;
            line-height: 1;
            color: #000;
            z-index: 2;
            position: relative;
            text-shadow: 0px 2px 10px rgba(99, 50, 246, 0.5);
            transition: all 0.3s ease-in;
            animation: flip 8s infinite;
            @media (max-width: 768px) {
              font-size: 3.5rem;
            }
          }
          @media (max-width: 768px) {
            padding-top: 80px;
          }
        }
        .university {
          padding-top: 5px;
          h5 {
            font-family: "Rarepz-font";
            font-size: 18px;
            font-weight: bold;
          }
        }
        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }
      }
    }
    .square-position2 {
      margin-top: 150px;
      margin-bottom: 20px;
      .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        .cover-letter {
          max-width: 350px;
          p {
            font-family: "PT Sans", sans-serif;
            font-size: 20px;
            letter-spacing: 1px;
            line-height: 1.1;
            color: #000;
            text-shadow: 0px 2px 10px rgba(99, 50, 246, 0.2);
          }
        }
        div.skills {
          h5 {
            font-family: "Rarepz-font";
            font-size: 4rem;
            font-weight: bold;
            line-height: 1.5;
            letter-spacing: 2.5px;
            text-shadow: 0px 2px 10px rgba(99, 50, 246, 0.5);
            @media (max-width: 768px) {
              font-size: 3.5rem;
            }
          }
          ul {
            list-style: square;
            li {
              display: grid;
              grid-template-columns: 1fr 1fr;
              padding-bottom: 5px;
              &::before {
                list-style: square;
              }
              p {
                font-family: "PT Sans", sans-serif;
                font-size: 20px;
                letter-spacing: 1px;
                line-height: 1.1;
                color: #000;
                text-shadow: 0px 2px 10px rgba(99, 50, 246, 0.2);
              }
            }
          }
        }
        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }
      }
      @media (max-width: 768px) {
        margin-top: 30px;
      }
    }
  }
}
// .circle-animation {
//   position: absolute;
//   top: 30%;
//   left: 1%;
//   img {
//     width: 250px;
//     animation: rotate 12s infinite;
//     @media (max-width: 768px) {
//       width: 230px;
//     }
//     @media (max-width: 992px) {
//       width: 200px;
//     }
//   }
//   @media (max-width: 768px) {
//    display: none;
//   }
// }
@keyframes rotate {
  0% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-30px) translateX(100px);
  }
  50% {
    transform: translateY(0px) translateX(400px);
  }
  75% {
    transform: rotate(0deg) translateY(0) translateX(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes flip {
  0% {
    transform: perspective(0px) scale(1);
    animation-timing-function: ease-out;
  }
  50% {
    transform: perspective(400px) scale(1.1);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(0px) scale(1);
    animation-timing-function: ease;
  }
}
</style>