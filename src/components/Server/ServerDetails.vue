<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Server Details are currently not updated</p>
    <template v-else="server">
      <p>Server Status: {{ server.status }}</p>
      <button @click="resetStatus">Reset Status</button>
    </template>
  </div>

</template>

<script>
import { eventBus } from '../../main';

export default {
  data() {
    return {
      server: '',
    };
  },
  created() {
    eventBus.$on('showServerDetail', (server) => {
      // Note: server here is same as the one in Servers.vue (pass by reference not value)
      this.server = server;
    });
  },
  methods: {
    resetStatus() {
      this.server.status = 'Normal';
    },
  },
};
</script>

<style>

</style>
