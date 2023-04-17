import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "nprogress/nprogress.css"
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
Vue.config.productionTip = false

Vue.component(Header.name,Header)
Vue.component(Footer.name,Footer)



Vue.use(ElementUI);

new Vue({
  beforeCreate() {
    console.log(Vue.prototype);
    Vue.prototype.$bus = this
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
