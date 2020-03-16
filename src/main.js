import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import ProgressBar from 'vuejs-progress-bar'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(ProgressBar)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    {path: '', name: 'About', component: About},
    {path: '/Projects', name: 'Projects',  component: Projects},
    {path: '/Contact', name: 'Contact', component: Contact}
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
