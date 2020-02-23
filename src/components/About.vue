<template>
  <div class="About">
      <div class="jumbotrom">
          <div class="content">
            <h3>Rafael A. Reyes</h3>
            <p>Hi, i'm 21 a student from UTESA (Universidad Tecnológica de Santiago) </p>
            <p>I am currently working building awesome websites on some simple page applications (SPA)</p>
          </div>
      </div>
      <Copyright />
  </div>
</template>

<script>
import Copyright from './Copyright';
export default {
    name: 'About',
    props: [],
    components:{
        Copyright
    },
    data(){
        return{
            img: require('../assets/perfil.jpg'),
            alt: 'Rafael Reyes'
        }
    }
}
</script>

<style scoped>
.About{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.jumbotrom{
    height: 300px;
    background-attachment: fixed;
    background: url('../assets/header.png') no-repeat center center/cover;
    width: 100%;
    margin: 0 auto;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.jumbotrom img{
    width: 100%;
    max-width: 200px;
    border-radius: 50%;
    padding: 30px 0px;
}
.jumbotrom .content h3{
    line-height: 30px;
    margin-bottom: 10px;
    font-size: 30px;
}
.jumbotrom .content p{
    font-size: 20px;
}
</style>