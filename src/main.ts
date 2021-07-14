import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import '@/assets/app.css'

// Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
