import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '@/views/auth/Register.vue';
import Login from '@/views/auth/Login';
import Home from '@/views/Home';
import { getItem } from '@/helpers/persistanceStorage';
import Editor from '@/views/editor/Editor';

Vue.use(VueRouter);

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '/',
    name: 'home',
    meta: {
      auth: true,
    },
    component: Home,
  },
  {
    path: '/editor',
    name: 'editor',
    meta: {
      auth: true,
    },
    component: Editor,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = getItem('_token');

  if (to.matched.some((record) => record.meta.auth) && !loggedIn) {
    next('/login');
    return;
  }
  if (to.matched.some((record) => record.meta.hideForAuth) && loggedIn) {
    next('/home');
    return;
  }
  next();
});

export default router;
