import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueMoment from 'vue-moment';

Vue.config.productionTip = false;
Vue.use(vueMoment);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
