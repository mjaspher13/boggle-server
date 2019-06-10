window.Vue = require('vue');
import store from './store'
window.QRCode = require ('qrcode')
import VueSweetalert2 from 'vue-sweetalert2';
import io from 'socket.io';
import VueSocketIO from 'vue-socket.io';

export const SocketInstance = io('http://localhost:4000');

Vue.use(VueSocketIO, SocketInstance)
Vue.use(VueSweetalert2)

Vue.component('gamewidget', require('./components/GameWidget.vue').default);
Vue.component('timer', require('./components/GameWidget/Timer.vue').default);
Vue.component('wordlist', require('./components/WordList.vue').default);
Vue.component('wordinput', require('./components/WordInput.vue').default);
Vue.component('register', require('./components/Register.vue').default);
Vue.component('loading-board', require('./components/LoadingBoard.vue').default);


new Vue({
  el: '#app',
  store
})
