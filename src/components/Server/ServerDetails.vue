<template>
  <div class="col-xs-12 col-sm-6">
    <p v-show="!server">Server Details are currently not updated</p>
    <p v-show="server">Server Status: {{ server.status }}</p>
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
      this.server = server;
    });
  },
};
</script>

<style>

</style>
