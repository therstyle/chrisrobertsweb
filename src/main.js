import Vue from 'vue'
import App from './App.vue'
//import VueAnalytics from 'vue-analytics'


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// Vue.use(VueAnalytics, {
//   id: 'UA-9665180-9'
// })
