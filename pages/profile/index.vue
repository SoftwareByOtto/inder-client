<template>
  <div>
    <b-container>
      <h1>Profile of {{profile.username.toUpperCase()}}</h1>
      <b-card header="Profile">
        <img :src="profile.avatar" alt />
        <h1>{{profile.bio}}</h1>
        <h2>You have {{profile.matches.length}} matches!</h2>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  async asyncData({ $axios, params, store }) {
    const profile = await $axios.$get(`/profile/${store.state.auth.user.id}`);
    const messages = await $axios.$get(`/messages/${store.state.auth.user.id}`);
    return {
      profile,
      messages
    };
  }
};
</script>

<style scoped>
</style>
