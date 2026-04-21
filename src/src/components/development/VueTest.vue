<script setup lang="ts">
import CommentTest from './vue-test/CommentTest.vue';
import AuthTest from './vue-test/AuthTest.vue';

const sectionClass = "border-4 p-5"
</script>

<template>
  <div class="mx-auto space-y-10 p-5">
    <div :class="sectionClass">
      <AuthTest />
    </div>
    <div :class="sectionClass">
      <CommentTest />
    </div>
  </div>
</template>
