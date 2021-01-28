<template>
  <div>
    <TildaHeader />
    <MenuSideBar />
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>
<script>
import TildaHeader from '@/components/layouts/Header';
import MenuSideBar from '@/components/layouts/MenuSideBar';
export default {
  components: { MenuSideBar, TildaHeader },
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
