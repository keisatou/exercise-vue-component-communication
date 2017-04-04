<template>
  <div>
    <li
      class="list-group-item"
      v-for="server in servers">
      Server #{{ server.id }} ({{ server.status }})
    </li>
  </div>
</template>

<script>
export default {
  props: {
    servers: {
      type: Array,
    },
  },
};
</script>

<style>
</style>

