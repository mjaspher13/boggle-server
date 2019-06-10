window.Vue = require('vue');
import store from './store'
window.QRCode = require('qrcode')
import VueSweetalert2 from 'vue-sweetalert2';
import SocketIO from 'socket.io-client'

import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:4000'), //options object is Optional
})
);


Vue.use(VueSweetalert2)

Vue.component('gamewidget', require('./components/GameWidget.vue').default);
Vue.component('timer', require('./components/GameWidget/Timer.vue').default);
Vue.component('wordlist', require('./components/WordList.vue').default);
Vue.component('wordinput', require('./components/WordInput.vue').default);
Vue.component('register', require('./components/Register.vue').default);
Vue.component('loading-board', require('./components/LoadingBoard.vue').default);
Vue.component('qr-code', require('./components/QRCode.vue').default);
Vue.component('count', require('./components/Count.vue').default);

new Vue({
  el: '#app',
  store
})
