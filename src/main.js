import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import ProgressBar from 'vuejs-progress-bar'
Vue.use(ProgressBar)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    {path: '', name: 'About', component: About},
    {path: './Projects.vue', name: 'Projects',  component: Projects},
    {path: './Contact.vue', name: 'Contact', component: Contact}
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
