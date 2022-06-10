import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.css'

import Maska from 'maska'
Vue.use(Maska)

export const bus  = new Vue(); 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
