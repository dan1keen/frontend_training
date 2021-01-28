import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/modules/auth';
import editor from '@/store/modules/editor';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    editor,
  },
});
