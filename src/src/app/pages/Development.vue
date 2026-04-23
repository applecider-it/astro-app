<script setup lang="ts">
import CommentTest from '@/app/components/development/vue-test/CommentTest.vue';

const sectionClass = "border-4 p-5 border-gray-400 rounded-lg"
</script>

<template>
  <div class="mx-auto space-y-10 p-5">
    <div :class="sectionClass">
      <CommentTest />
    </div>
  </div>
</template>
