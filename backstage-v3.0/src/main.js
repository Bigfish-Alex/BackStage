import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 

Vue.config.productionTip = false

Vue.use(ElementUI);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
