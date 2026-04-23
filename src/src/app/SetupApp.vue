<script setup>
import { createApp, onMounted } from 'vue';
import App from './App.vue';
import { createMyRouter } from './router';

onMounted(() => {
  const app = createApp(App);

  const router = createMyRouter();
  app.use(router);

  app.mount('#vue-app-root');
});
</script>

<template>
  <div id="vue-app-root"></div>
</template>
