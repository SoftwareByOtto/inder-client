<template>
  <div>
    <b-container>
      <!-- {{dislikes}} -->
      <h1>dislikes!</h1>
      <h2>You have {{dislikes.length}} dislikes!</h2>
      <Profiles class="dislikes" :users="dislikes" label="Disliked 🤮"></Profiles>
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
    const dislikes = await $axios.$get("dislikes");
    console.log(dislikes);
    return {
      dislikes
    };
  }
};
</script>

<style scoped>
</style>