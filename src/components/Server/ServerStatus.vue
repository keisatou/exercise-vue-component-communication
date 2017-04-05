<template>
  <div>
    <li
      class="list-group-item"
      v-for="server in servers">
      Server #{{ server.id }}
      <button @click="showServerDetail(server)">Detail</button>
    </li>
  </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
  props: {
    servers: {
      type: Array,
    },
  },
  methods: {
    showServerDetail(server) {
      eventBus.showServerDetail(server);
    },
  },
};
</script>

<style>
</style>

