<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'login' }">
              Need an account?
            </router-link>
          </p>
          VALIDATION ERRORS
          <form @submit.prevent="handleSubmit">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="is_submitting"
            >
              Sign Up
            </button>
            {{ is_submitting }}
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McvRegister',
  computed: {
    count() {
      return this.$store.state.count;
    },
    is_submitting() {
      return this.$store.state.auth.isSubmitting;
    },
  },
  methods: {
    handleSubmit() {
      console.log('form submitted');
      this.$store
        .dispatch('register', {
          email: 'gwegwgwd@gwegwe.com',
          username: 'gegsdgsd',
          password: 'gdsgsdggrege',
        })
        .then((result) => {
          console.log('result from register action', result);
        });
    },
  },
};
</script>

<style scoped></style>
