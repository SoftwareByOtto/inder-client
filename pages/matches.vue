<template>
  <div>
    <b-container>
      <h1>matches</h1>
      <h2>You have {{matches.length}} matches!</h2>
      <Profiles :users="matches" label="Match ❤️"></Profiles>
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
    const matches = await $axios.$get("matches");
    return {
      matches
    };
  }
};
</script>

<style scoped>
</style>