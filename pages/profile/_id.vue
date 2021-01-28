<template>
  <div>
    <b-container>
      <!-- {{profile}} -->
      <h1>Profile of {{profile.username.toUpperCase()}}</h1>
      <b-card header="Profile">
        <img :src="profile.avatar" alt />
        <h1>{{profile.bio}}</h1>
        <h2>messages</h2>
        <!-- {{messages}} -->
        <b-form @submit.prevent="sendMessage">
          <b-form-group label="message">
            <b-input v-model="messageToSend"></b-input>
          </b-form-group>
          <b-button type="submit">submit</b-button>
        </b-form>

        <div v-for="message in messages" :key="message.body">
          <b-card
            class="mt-3"
            :title="`${message.user && message.user.username} said`"
            :sub-title="`sent at ${message.created_at}`"
            :img-src="message.user && message.user.avatar"
            img-left
          >{{message.body}}</b-card>
        </div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
let chat;
export default {
  middleware: ["auth"],
  async asyncData({ $axios, params }) {
    const profile = await $axios.$get(`/profile/${params.id}`);
    const messages = await $axios.$get(`/messages/${params.id}`);
    return {
      profile,
      messages
    };
  },
  data() {
    return {
      messageToSend: ""
    };
  },
  methods: {
    async sendMessage() {
      const res = await this.$axios.post("/messages", {
        id: this.profile.id,
        body: this.messageToSend
      });
      console.log(res.data);
      this.$toast.success(res.data);
      chat.emit("message", {
        body: this.messageToSend,
        recipientId: Number(this.$route.params.id)
      });
      this.messageToSend = "";
    }
  },
  computed: {},
  mounted() {
    this.$io.on("open", () => {
      chat = this.$io.subscribe("chat");
      chat.emit("open");
      chat.on("message", message => {
        console.log(message);
        this.messages.push({
          user: {
            username: message.user
          },
          body: message.body,
          created_at: new Date()
        });
        this.$toast.show(`${message.user}: ${message.body}`);
      });
    });
  }
};
</script>

<style scoped>
</style>