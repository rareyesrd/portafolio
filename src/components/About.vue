<template>
  <div class="About">
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
              I get passionated on building things for the web, I’ve been learning for almost a year.
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
    <div class="circle-animation">
      <img src="../assets/geometry-circle.svg" alt="circle" />
    </div>
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgba(0, 0, 0, 0.89);
  background: url("../assets/bg-about.svg") no-repeat center center/cover;
  width: 100%;
  height: 100vh;
  .container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 0;
    .square-position {
      // position: relative;
      height: 0;
      .svg-background {
        display: none;
      }
      .content {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: 100px;
        div {
          h1 {
            font-family: "Rarepz-font";
            font-size: 7.5rem;
            line-height: 1.1;
            color: #000;
            z-index: 2;
            position: relative;
            text-shadow: 0px 2px 10px rgba(99, 50, 246, 0.5);
          }
        }
        .university {
          h5 {
            font-family: "Rarepz-font";
            font-size: 18px;
            font-weight: bold;
          }
        }
      }
    }
    .square-position2 {
      .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        .cover-letter {
          // display: flex;
          // flex-direction: column;
          // justify-content: space-around;
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
          width: 500px;
          h5 {
            font-family: "Rarepz-font";
            font-size: 90px;
            font-weight: bold;
            line-height: 1.5;
            letter-spacing: 2.5px;
            text-shadow: 0px 2px 10px rgba(99, 50, 246, 0.5);
            margin-top: -100px;
          }
          ul {
            list-style: square;
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
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
      }
    }
  }
}
.circle-animation {
  position: absolute;
  top: 20%;
  left: 10%;
  img {
    animation: rotate 8s infinite;
  }
}
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
</style>