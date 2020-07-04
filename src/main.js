import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib';
import { store } from 'store/store';

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  render: h => h(App),
  store
}).$mount('#app');

