import Vue from 'vue'
import store from './store/index.js'
import App from './App.vue'

// import axios from 'axios'
// axios.defaults.baseURL = 'https://infos-tools.firebaseio.com'
// axios.defaults.headers.get['Accepts'] = 'application/json'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
