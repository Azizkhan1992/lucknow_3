import Vue from 'vue'
import App from './App.vue'
import router from './router'
import styles from './styles/styles.scss'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import {fontawesome} from './plugins/fontawesome'
import Antd from 'ant-design-vue'

Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  fontawesome,
  render: function (h) { return h(App) }
}).$mount('#app')
