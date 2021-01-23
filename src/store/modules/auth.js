import authApi from '@/api/auth';
import axios from '@/api/axios';
import { setItem, removeItem } from '@/helpers/persistanceStorage';
const state = {
  isSubmitting: false,
  isLoggedIn: null,
  currentUser: null,
  _token: null,
};

const mutations = {
  authStart(state) {
    state.isSubmitting = true;
  },
  authSuccess(state, payload) {
    state.isSubmitting = false;
    state.isLoggedIn = true;
    state._token = payload.token;
    setItem('_token', payload.token);
    axios.defaults.headers.common.Authorization = `Bearer ${payload.token}`;
  },
  authFailure(state, payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  },
  clearUserData() {
    removeItem('_token');
    location.reload();
  },
};

const actions = {
  login(context, credentials) {
    return new Promise((resolve) => {
      context.commit('authStart');
      authApi
        .login(credentials)
        .then((response) => {
          context.commit('authSuccess', response.data);
          resolve(response.data);
        })
        .catch((result) => {
          context.commit('authFailure', result.response.data.errors);
        });
    });
  },
  logout(context) {
    return new Promise((resolve) => {
      context.commit('authStart');
      authApi
        .logout()
        .then((response) => {
          context.commit('clearUserData');
          resolve(response.data);
        })
        .catch((result) => {
          context.commit('authFailure', result.response.data.errors);
        });
    });
  },
  logoutAlt(context) {
    context.commit('clearUserData');
  },
};

export default {
  state,
  mutations,
  actions,
};
