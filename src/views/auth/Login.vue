<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'register' }">
              Need an account?
            </router-link>
          </p>
          <!--          VALIDATION ERRORS-->
          <form @submit.prevent="handleSubmit">
            <fieldset class="form-group">
              <input
                v-model="loginForm.email"
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="loginForm.password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="is_submitting"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
    };
  },
  name: 'McvLogin',
  computed: {
    is_submitting() {
      return this.$store.state.auth.isSubmitting;
    },
  },
  methods: {
    handleSubmit() {
      console.log('form submitted');
      this.$store.dispatch('login', this.loginForm).then(() => {
        this.$router.push({ name: 'home' });
      });
    },
  },
};
</script>

<style scoped></style>
