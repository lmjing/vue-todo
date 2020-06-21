import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib';

Vue.config.productionTip = false;
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app');

