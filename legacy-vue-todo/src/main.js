import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib';
import { store } from './store/store';

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

