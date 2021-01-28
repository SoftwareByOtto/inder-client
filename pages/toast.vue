<template>
  <div>
    <h1>toast</h1>
    <b-button @click="toast">click</b-button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    toast() {
      this.$toast.success("Logged In!");
    }
  },
  computed: {}
};
</script>

<style scoped>
</style>