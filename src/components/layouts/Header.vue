<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link :to="{ name: 'editor' }" class="nav-link">
            Редактор
          </router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!--          <b-nav-form>-->
          <!--            <b-form-input-->
          <!--              size="sm"-->
          <!--              class="mr-sm-2"-->
          <!--              placeholder="Search"-->
          <!--            ></b-form-input>-->
          <!--            <b-button size="sm" class="my-2 my-sm-0" type="submit"-->
          <!--              >Search</b-button-->
          <!--            >-->
          <!--          </b-nav-form>-->

          <!--          <b-nav-item-dropdown text="Lang" right>-->
          <!--            <b-dropdown-item href="#">EN</b-dropdown-item>-->
          <!--            <b-dropdown-item href="#">ES</b-dropdown-item>-->
          <!--            <b-dropdown-item href="#">RU</b-dropdown-item>-->
          <!--            <b-dropdown-item href="#">FA</b-dropdown-item>-->
          <!--          </b-nav-item-dropdown>-->

          <b-nav-item-dropdown right v-if="isLoggedIn">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <!--            <b-dropdown-item href="#">Profile</b-dropdown-item>-->
            <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-navbar-nav v-else>
            <router-link :to="{ name: 'login' }" class="nav-link">
              Login
            </router-link>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'TildaHeader',
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

<style scoped></style>
