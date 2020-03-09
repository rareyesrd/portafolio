<template>
  <div class="About">
    <div class="container">
      <div class="square-position">
        <svg width="100%" class="svg-background" viewBox="0 0 434 672">
          <path
            d="M181.037 284.012c10.88 17.49 20.299 10.631 31.18 28.122 10.88 17.49 1.471 24.349 12.353 41.85 10.88 17.49 20.287 10.62 31.167 28.11 10.88 17.502 1.473 24.36 12.353 41.85 2.781 4.474 5.466 7.355 8.103 9.457 7.967 4.361 16.237 7.703 22.501 17.772.02.034.397.623.565.893 1.642 2.632 3.145 6.276 4.511 10.934 2.286 9.933-.794 17.055 7.267 30.012 10.88 17.49 20.299 10.631 31.18 28.122 10.88 17.49 1.471 24.349 12.353 41.85 10.88 17.49 20.287 10.62 31.167 28.11 10.88 17.502 1.473 24.36 12.353 41.85 10.88 17.502 20.289 10.633 31.17 28.122 1.64 2.632 3.22 6.276 4.74 10.934l-434-.453V0c10.88 17.49 27.814 14.684 38.694 32.173 10.88 17.49 1.462 24.35 12.343 41.839 10.88 17.49 20.299 10.631 31.18 28.122 10.88 17.49 1.471 24.349 12.353 41.85 10.88 17.49 20.287 10.62 31.167 28.11 10.88 17.502 1.473 24.36 12.353 41.85 10.88 17.502 20.289 10.633 31.17 28.122 1.64 2.632 3.062 6.276 4.264 10.934 2.749 10.466-.816 17.624 7.513 31.012z"
            fill="#48068f"
            fill-rule="evenodd"
          />
        </svg>
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
        <svg width="100%" height="100%" viewBox="0 0 360 248" class="svg-background">
          <path
            d="M360 0c-24.887 15.507-20.894 39.643-45.78 55.15-24.887 15.508-34.647 2.084-59.534 17.593-24.886 15.507-15.127 28.931-40.015 44.439-24.887 15.507-34.647 2.098-59.549 17.607-24.889 15.507-15.111 28.915-40 44.422-24.902 15.508-34.662 2.1-59.549 17.608-24.904 15.507-15.129 28.916-40.015 44.424C9.94 244.753 5.069 246.79.645 248H0V0h360z"
            fill="#48068f"
            fill-rule="evenodd"
          />
        </svg>
        <div class="content">
          <div>
            <p>I'm currently working on some</p>
            <p>single page applications (SPA)</p>
            <p>Here you'll see the projects i've built</p>
          </div>
          <div class="skills">
            <h5>Skills</h5>
            <ul>
              <li>
                <p>Html5 + Css3</p>
                <progress-bar :options="options" :value="95" />
              </li>
              <li>
                <p>Sass (scss)</p>
                <progress-bar :options="options" :value="85" />
              </li>
              <li>
                <p>Javascript</p>
                <progress-bar :options="options" :value="60" />
              </li>
              <li>
                <p>Vuejs</p>
                <progress-bar :options="options" :value="55" />
              </li>
              <li>
                <p>Firebase</p>
                <progress-bar :options="options" :value="35" />
              </li>
            </ul>
          </div>
        </div>
      </div>
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
    return {};
  }
};
</script>

<style scoped lang="scss">
.About {
  background-color: blue;
  .container {
    padding-top: 200px;
    .square-position {
      position: relative;
      height: 100vh;
      .svg-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: grid;
        justify-content: center;
        align-items: center;
        div {
          h1 {
            font-size: 100px;
            color: #fff;
          }
        }
        .university {
          padding-left: 30px;
          padding-right: 30px;
          h5 {
            display: block;
            font-family: Nunito Sans, -apple-system, BlinkMacSystemFont,
              Segoe UI, Roboto, Ubuntu, Cantarell, Fira Sans, Droid Sans,
              Helvetica Neue, sans-serif;
            font-size: 1rem;
            font-weight: 400;
            margin-bottom: 1rem;
            text-transform: capitalize;
          }
        }
      }
    }
    .square-position2 {
      margin-top: -2px;
      position: relative;
      .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  }
  @media (min-width: 768px) {
    width: 100%;
    max-width: 1550px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: rgba(247, 247, 247, 0.884);
    color: rgba(0, 0, 0, 0.89);
    background: url("../assets/aboutBg2.png") no-repeat center center/cover;
    display: flex;
    justify-content: center;
    height: 100vh;
    .container {
      width: 70%;
      margin: 0 auto;
      padding-top: 0px;
      .square-position {
        height: 80vh;
        .svg-background {
          display: none;
        }
        .content {
          height: 30vh;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          div {
            h1 {
              font-size: 85px;
              margin-left: -100px;
              font-weight: bold;
              color: #000;
            }
          }
          .university {
            h5 {
              font-size: 22px;
              font-weight: bold;
            }
          }
        }
      }
      .square-position2 {
        .svg-background {
          display: none;
        }
        .content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          div {
            margin-left: -100px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            max-width: 350px;
            p {
              font-size: 18px;
              font-weight: bold;
              text-transform: capitalize;
            }
          }
          div.skills {
            width: 150px;
            h5 {
              font-size: 22px;
              font-weight: bold;
            }
            ul {
              list-style: square;
              li {
                display: flex;
                padding-bottom: 5px;
                &::before {
                  list-style: square;
                }
                p {
                  font-size: 15px;
                  font-weight: lighter;
                  flex: 1;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>