<template>
  <div>
    <b-container>
      <h1>Register</h1>
      <p>You'll be there in one minute!</p>
      <b-form @submit.prevent="register">
        <b-form-group label="username">
          <b-input v-model="user.username"></b-input>
        </b-form-group>
        <b-form-group label="email">
          <b-input v-model="user.email"></b-input>
        </b-form-group>
        <b-form-group label="password">
          <b-input v-model="user.password"></b-input>
        </b-form-group>
        <b-form-group label="avatar">
          <b-input v-model="user.avatar"></b-input>
        </b-form-group>
        <b-form-group label="bio">
          <b-input v-model="user.bio"></b-input>
        </b-form-group>
        <b-checkbox class="mb-3" v-model="user.teaching">are you a teacher</b-checkbox>
        <b-button type="submit">Submit</b-button>
      </b-form>
      <hr />
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
    register() {
      this.$axios
        .post("/register", this.user)
        .then(() =>
          this.$auth.loginWith("local", {
            data: this.user
          })
        )
        .then(() => this.$toast.success("Registered and Logged In. Welcome!"))
        .catch(err => this.$toast.error("Sorry, something's wrong."));
      console.log(this.user);
    }
  },
  computed: {}
};
</script>

<style scoped>
</style>