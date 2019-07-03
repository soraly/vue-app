import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import store from './officialDemos/todoMVC/store'

//import test from './test/myPromise'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
