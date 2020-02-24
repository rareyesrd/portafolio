<template>
  <div class="About">
    <div class="container">
      <div class="square-position">
        <div>
          <h1>
            Rafael A
            <span>.</span>
          </h1>
          <h1>Reyes</h1>
        </div>
        <div>
          <h5>
            Student from UTESA
            <br />(Universidad Tecnologica de Santiago)
          </h5>
        </div>
      </div>
      <div class="square-position2">
        <div>
          <p>I'm currently working on some</p>
          <p>single page applications (SPA)</p>
          <p>Here you'll see the projects i've built</p>
        </div>
        <div class="skills">
          <h5>Skills</h5>
          <ul>
            <li>
             <p> Html5 + Css3</p>
                <progress-bar :options="options" :value="95" />
            </li>
            <li>
              <p>Sass (scss)</p>
              <progress-bar :options="options" :value="85" />
              </li>
            <li><p>Javascript</p>
            <progress-bar :options="options" :value="60" /></li>
            <li><p>Vuejs</p>
            <progress-bar :options="options" :value="55" /></li>
            <li><p>Firebase</p>
            <progress-bar :options="options" :value="35" /></li>
          </ul>
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
    return {
      options: {
        text: {
          color: "#FFFFFF",
          shadowEnable: true,
          shadowColor: "#000000",
          fontSize: 10,
          fontFamily: "Helvetica",
          dynamicPosition: false,
          hideText: false
        },
        progress: {
          color: "#2dbd2d",
          backgroundColor: "#7e0cf5"
        },
        layout: {
          height: 15,
          width: 100,
          verticalTextAlign: 61,
          horizontalTextAlign: 43,
          zeroOffset: 0,
          strokeWidth: 10,
          progressPadding: 0,
          type: "line"
        }
      }
    };
  }
};
</script>

<style scoped lang="scss">
.About {
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #fff;
  background: url("../assets/aboutBg2.png") no-repeat center center/cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  .container {
    width: 70%;
    margin: 0 auto;
    .square-position {
      display: flex;
      height: 35vh;
      justify-content: space-between;
      align-items: flex-end;
      h1 {
        font-size: 75px;
        margin-left: -100px;
        font-weight: bold;
        span {
          font-size: 80px;
        }
      }
      h5 {
        font-size: 20px;
      }
    }
    .square-position2 {
      height: 40vh;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      div {
        height: 30%;
        margin-left: -100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          font-size: 15px;
          font-weight: bold;
        }
      }
      div.skills{
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
            &::before{
              list-style: square;
            }
            p{
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
</style>