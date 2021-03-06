import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//引入字体图标
import "./assets/font/iconfont.css"
//导入全局样式
import './assets/css/global.css'
import axios from 'axios'
axios.defaults.baseURL = "http://timemeetyou.com:8889/api/private/v1/"
Vue.prototype.$http = axios

Vue.config.productionTip = false
console.log();
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
