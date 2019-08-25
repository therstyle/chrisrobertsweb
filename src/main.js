import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-ua'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

Vue.use(VueAnalytics, {
  // [Required] The name of your app as specified in Google Analytics.
  appName: 'cr-web',
  // [Required] The version of your app.
  appVersion: '1.0',
  // [Required] Your Google Analytics tracking ID.
  trackingId: 'UA-9665180-9'
})
