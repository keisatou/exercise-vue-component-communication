import Vue from 'vue';
import App from './App.vue';

export const eventBus = new Vue({ // eslint-disable-line import/prefer-default-export
  methods: {
    showServerDetail(server) {
      this.$emit('showServerDetail', server);
    },
  },
});

new Vue({
  el: '#app',
  render: h => h(App),
});
