import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from '@/api/axios';
import { getItem } from '@/helpers/persistanceStorage';
Vue.config.productionTip = false;

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
