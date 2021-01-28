<template>
  <div>
    <b-jumbotron
      fluid
      :header="`Welcome to Inder, ${$store.state.auth.user.username}!`"
      lead="Try it out now!"
    >
      <template v-if="!$store.state.auth.loggedIn">
        <b-button to="/register">Sign up</b-button>
      </template>
      <template v-else>We hope you enjoy it!</template>
      <b-checkbox v-model="teachersOnly">teachers only</b-checkbox>
    </b-jumbotron>

    <b-container>
      <h1>users</h1>
      <h2>You have {{filteredUsers.length}} users online!</h2>
      <Profiles
        :users="filteredUsers"
        likable="true"
        @emitLike="like($event)"
        @emitDislike="showDislikeModal($event)"
      ></Profiles>
    </b-container>

    <b-modal @ok="dislike" title="You disliked someone" id="dislike-modal">
      <b-form-group label="Why don't you like that person?" description="Help them get better.">
        <b-input v-model="dislikeReason"></b-input>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import Profiles from "@/components/Profiles";
export default {
  components: {
    Profiles
  },
  middleware: ["auth"],
  methods: {
    async showDislikeModal(id) {
      this.dislikedId = id;
      this.$bvModal.show("dislike-modal");
      // this.$toast.info("you don't like that person");
    },
    async dislike() {
      console.log(this.dislikedId, this.dislikeReason);
      const res = await this.$axios.post("/dislike", {
        id: this.dislikedId,
        body: this.dislikeReason
      });
      this.users = this.users.filter(user => user.id !== this.dislikedId);
      this.dislikeReason = "";
    },
    async like(id) {
      console.log(id);
      const match = await this.$axios.post("/like", { id });
      console.log(match.data);
      if (match.data) {
        this.$toast.success("you matched!", {
          action: {
            text: "go to profile",
            href: `/profile/${id}`
          }
        });
      } else {
        this.$toast.error("you didnt match");
      }
      // const response = await this.$axios.get("recs");
      // this.users = response.data;
      this.users = this.users.filter(user => user.id !== id);
    }
  },
  computed: {
    filteredUsers() {
      return this.teachersOnly
        ? this.users.filter(user => user.teaching)
        : this.users;
    }
  },
  async asyncData({ $axios }) {
    const users = await $axios.$get("recs");
    console.log(users);
    return {
      users
    };
  },
  data() {
    return {
      teachersOnly: false,
      dislikedId: "",
      dislikeReason: null
    };
  }
};
</script>

<style scoped>
</style>
