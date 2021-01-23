<template>
  <div>
    <button v-if="isLoggedIn" @click="logout">Logout</button>
    <router-view />
  </div>
</template>
<script>
export default {
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
