<template>
  <div>
    <b-container>
      <h1>Log In</h1>
      <b-form @submit.prevent="login">
        <b-form-group label="email">
          <b-input v-model="user.email"></b-input>
        </b-form-group>
        <b-form-group label="password">
          <b-input v-model="user.password"></b-input>
        </b-form-group>
        <b-button type="submit">Submit</b-button>
      </b-form>
      <br />

      <hr />
      <h3>Don't have an account?</h3>
      <nuxt-link to="/register">Create Account</nuxt-link>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    login() {
      this.$auth
        .loginWith("local", { data: this.user })
        .then(() => this.$toast.success("Logged In!"))
        .catch(err => this.$toast.error("Incorrect details. Please try again"));
    },
    loginTest() {
      this.$auth
        .loginWith("local", {
          data: {
            email: "john@b.com",
            password: "john"
          }
        })
        .then(() => this.$toast.success("Logged In!"))
        .catch(err => this.$toast.error("Incorrect details. Please try again"));
      // this.$axios
      //   .post("login", {
      //     email: "a@b.com",
      //     password: "pass"
      //   })
      //   .then(res => console.log(res));

      // this.$auth
      //   .loginWith("local", {
      //     data: {
      //       email: "a@b32.com",
      //       password: "secret"
      //     }
      //   })
      //   .then(res => console.log(res));
    }
  },
  computed: {}
};
</script>

<style scoped>
</style>
