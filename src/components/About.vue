<template>
  <div class="About">
      <div class="jumbotrom">
          <div class="content">
            <h3>Rafael A. Reyes</h3>
            <p>I'm a student from UTESA (Universidad Tecnológica de Santiago)</p>
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
    
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.jumbotrom{
    height: 300px;
    background-attachment: fixed;
    background: url('../assets/header.png') no-repeat center center/cover;
    width: 100%;
    margin: 50px auto;
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
    line-height: 20px;
    margin-bottom: 5px;
}
</style>