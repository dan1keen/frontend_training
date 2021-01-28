import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from '@/api/axios';
import { getItem } from '@/helpers/persistanceStorage';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.config.productionTip = false;
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
new Vue({
  router,
  store,
  created() {
    const token = getItem('_token');
    if (token) {
      this.$store.commit('authSuccess', { token });
    }
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.$store.commit('clearUserData');
        }
        return Promise.reject(error);
      }
    );
  },
  render: (h) => h(App),
}).$mount('#app');
