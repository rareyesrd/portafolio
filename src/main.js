import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/About.vue'
import Projects from './components/Projects.vue'


Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    {path: './', component: About},
    {path: './Projects.vue', component: Projects}
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
