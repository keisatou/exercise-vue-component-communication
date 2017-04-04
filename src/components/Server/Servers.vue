<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server-status :servers="servers"></app-server-status>
    </ul>
  </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue';

export default {
  data() {
    return {
      servers: [
        { id: 1, status: 'Normal' },
        { id: 2, status: 'Critical' },
        { id: 3, status: 'Unknown' },
        { id: 4, status: 'Normal' },
      ],
    };
  },
  components: {
    'app-server-status': ServerStatus,
  },
};
</script>

<style>
</style>
