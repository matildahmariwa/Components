import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/about'
import Contact from './components/contact'



Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes:[

    {
      path: '/about',
      name:'about',
      component: About
    },
    {
      path: '/contact',
      name:'contact',
      component: Contact
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
