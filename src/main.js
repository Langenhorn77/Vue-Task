import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'



new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store,
  vuetify: vuetify,
});
