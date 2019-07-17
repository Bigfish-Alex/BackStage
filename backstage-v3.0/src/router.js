import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import Login from './components/login/login'
import Index from './components/index/index'

 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'mian', component: Login },
    { path: '/login', name: 'Login', component: Login },
    { path: '/index', name: 'Index', component: Index }
  ]
})
