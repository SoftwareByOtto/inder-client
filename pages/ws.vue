<template>
  <b-container>
    <h1>Websocket test</h1>
    <p>hi</p>
    <b-form @submit.prevent="sendMessage">
      <b-form-group label="message">
        <b-input v-model="message"></b-input>
      </b-form-group>
      <b-button type="submit">send</b-button>
    </b-form>
    {{chat}}
  </b-container>
</template>

<script>
// let ws;
let chat;
export default {
  mounted() {
    // ws = adonis;
    //   .Ws("ws://192.168.1.4:3333")
    //   // remove 'Bearer' tag from jwt token
    //   .withJwtToken(this.$auth.getToken("local").substring(7))
    //   .connect();
    // chat = ws.subscribe("chat");
    chat = this.$io.subscribe("chat");
    console.log(chat);
    chat.emit("open");
    chat.on("message", message => {
      console.log(message);
      this.$toast.show(message.body);
    });
  },
  data() {
    return {
      message: ""
    };
  },
  methods: {
    sendMessage() {
      chat.emit("message", this.message);
    }
  },
  head() {
    return {
      title: "ws test",
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js"
        },
        {
          src:
            "https://unpkg.com/@adonisjs/websocket-client@1.0.9/dist/Ws.browser.js"
        },
        { src: "https://unpkg.com/jquery@3.3.1/dist/jquery.js" }
      ]
    };
  }
};
</script>