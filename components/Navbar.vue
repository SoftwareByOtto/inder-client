<template>
  <div>
    <b-navbar>
      <b-navbar-brand to="/">🔥Inder</b-navbar-brand>
      <b-navbar-nav>
        <template v-if="!$store.state.auth.loggedIn">
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item to="/register">Register</b-nav-item>
        </template>
        <template v-else>
          <b-nav-item @click="logout">Logout</b-nav-item>
          <b-nav-item to="/profile">{{$store.state.auth.user.username}}'s Profile</b-nav-item>
          <b-nav-item to="/likes">likes</b-nav-item>
          <b-nav-item to="/dislikes">dislikes</b-nav-item>
          <b-nav-item to="/matches">matches</b-nav-item>
        </template>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$auth.logout().then(() => this.$toast.success("Logged out"));
    }
  }
};
</script>

<style scoped>
</style>