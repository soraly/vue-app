import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

//import store from './officialDemos/todoMVC_no_vuex_byYYX'

//import test from './test/bind.js'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  //store,
}).$mount('#app')
