<template>
  <div>
    <b-form-group label="search">
      <b-input v-model="search" placeholder="e.g. John"></b-input>
    </b-form-group>
    <!-- {{filteredUsers}} -->
    <div class="grid">
      <div v-for="user in filteredUsers" :key="user.id">
        <!-- <b-card :img-src="user.avatar" img-top :title="user.username"> -->
        <b-card
          :header="label"
          :img-src="user.avatar"
          img-top
          :title="user.username.split(' ')[0]"
          :footer="`${_.get(user, '__meta__.inverse_likes_count')} points`"
        >
          <p>
            <b-badge>{{user.teaching ? 'teacher': 'student'}}</b-badge>
          </p>
          <i>Hey, I'm {{user.username}}</i>
          <p>{{user.bio || 'No description...'}}</p>
          <b-button variant="success" v-if="likable" @click="$emit('emitLike', user.id)">like</b-button>
          <b-button variant="danger" v-if="likable" @click="$emit('emitDislike', user.id)">dislike</b-button>
          <nuxt-link class="ml-3" :to="`/profile/${user.id}`">My Profile</nuxt-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Profiles",
  props: ["likable", "users", "label"],
  methods: {
    random() {
      return _.random(10000, 20000);
    }
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user =>
        user.username.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    _() {
      return _;
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
}
</style>