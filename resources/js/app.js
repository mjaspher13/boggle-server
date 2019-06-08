window.Vue = require('vue');
import '../../public/fonts/font.css';
import '../../resources/sass/app.scss';
import store from './store'
window.QRCode = require ('qrcode')
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);

Vue.component('gamewidget', require('./components/GameWidget.vue').default);
Vue.component('timer', require('./components/GameWidget/Timer.vue').default);
Vue.component('wordlist', require('./components/WordList.vue').default);
Vue.component('wordinput', require('./components/WordInput.vue').default);
Vue.component('register', require('./components/Register.vue').default);

new Vue({
  el: '#app',
  store
})