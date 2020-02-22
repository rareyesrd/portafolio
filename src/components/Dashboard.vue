<template>
    <div class="Dashboard">
        <div class="logo">
            <img :src="logo.img" alt="logotipo">
        </div>
        <ul class="nav-links">
           <li v-for="link in navLinks" :key="link"><a href=""> {{link}} </a> <hr></li> 
        </ul>
        <ul class="social-media">
         <li v-for="(social, index) in socialLinks" :key="index">
           <a :href="social.link" target="_blank"><img :src="social.red" :alt="social.alt"></a>  
        </li>   
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    props:{
    },
    data(){
    return{
        logo:{
            img: require('../assets/logo.png'),
            alt: 'logo'
        },
        navLinks:["About", "Projects", "Contact"],
        socialLinks:[
            {
                red: require('../assets/facebook-logo.svg'),
                link: 'https://www.facebook.com/Rafreye',
                alt: 'facebook'
            },
             {
                red: require('../assets/instagram-logo.svg'),
                 link: 'https://www.instagram.com/rarepz/',
                 alt: 'instagram'
            },
             {
                red: require('../assets/youtube-logo.svg'),
                 link: 'https://www.youtube.com/channel/UCy1yRc4KyhzOwKn-bZJiIqA',
                 alt: 'youtube'
            },
             {
                red: require('../assets/linkedin-logo.svg'),
                 link: 'https://www.linkedin.com/in/rafael-alexander-reyes-perez-499924186/',
                 alt: 'linkedin'
            }]
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400,400i,500,700&display=swap');
.Dashboard{
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(70, 62, 129, 0.8);
    font-family: 'Ubuntu', sans-serif;
}

.logo img{
    width: 100%;
    max-width: 170px;
}
ul{
    list-style: none;
}
ul.nav-links{
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}
ul.nav-links li a{
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    text-decoration: none;
}
.social-media{
    width: 80%;
    display: flex;
    justify-content: space-around;
}
.social-media a img{
    width: 30px;
}
</style>