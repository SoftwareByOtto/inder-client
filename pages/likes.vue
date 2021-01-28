<template>
  <div>
    <b-container>
      <h1>likes</h1>
      <h2>You have {{likes.length}} likes!</h2>
      <Profiles :users="likes" label="Liked 👍"></Profiles>
    </b-container>
  </div>
</template>

<script>
import Profiles from "@/components/Profiles";
export default {
  middleware: ["auth"],
  components: {
    Profiles
  },
  methods: {},
  computed: {},
  async asyncData({ $axios }) {
    const likes = await $axios.$get("likes");
    return {
      likes
    };
  }
};
</script>

<style scoped>
</style>