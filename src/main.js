import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css'
import ElementUI from 'element-ui'
import './styles.scss'
import axios from 'axios'
Vue.prototype.$axios = axios
import QS from 'qs'
Vue.prototype.qs = QS
import '@/permission' // permission control

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
