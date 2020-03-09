<template>
  <div class="Copyright">
      <p>&copy; All rights reserved by <span> Rafael A. Reyes </span></p>
  </div>
</template>

<script>
export default {
    name: 'Copyright',
    props: [],
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>

    .Copyright{
        position: fixed;
        right: 30px;
        bottom: 10px;
    }
    p{
        color: rgba(0,0,0,0.8);
        font-size: 12px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    p span{
        padding-bottom: 1px;
        border-bottom: 1px solid #ad56a9;
    }
</style>