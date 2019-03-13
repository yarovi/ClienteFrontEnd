// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/axios'
import App from './App'
import router from './router'
import Notifications from 'vue-notification'
import Vuelidate from 'vuelidate'
// import socketio from 'socket.io'
// import VueSocketIO from 'vue-socket.io'

// const options = { path: '/app/leer' } //Options object to pass into SocketIO

// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: SocketIO('http://localhost:8090', options), //options object is Optional
//     vuex: {
//       store,
//       actionPrefix: 'SOCKET_',
//       mutationPrefix: 'SOCKET_'
//     }
//   })
// )
Vue.use(Vuelidate)
Vue.use(Notifications)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
