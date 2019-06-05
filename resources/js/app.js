window.Vue = require('vue');
import '../../public/assets/bootstrap/css/bootstrap.min.css';
import '../../public/fonts/font.css';
import '../../public/css/styles.css';
import store from './store'

Vue.component('gamewidget', require('./components/GameWidget.vue').default);
Vue.component('timer', require('./components/GameWidget/Timer.vue').default);
Vue.component('wordlist', require('./components/WordList.vue').default);
Vue.component('wordinput', require('./components/WordInput.vue').default);
Vue.component('register', require('./components/Register.vue').default);

new Vue({
  el: '#app',
  store
})