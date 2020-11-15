// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import vueResource from 'vue-resource';
Vue.use(vueResource)

import vueRouter from 'vue-router';
Vue.use(vueRouter)

import Test from './components/Test';
import User from './components/User';

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes:[
    {
      path:'/',
      component:User
    },
    {
      path:'/test',
      component:Test
    }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
