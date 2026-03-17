<script setup lang="ts">
import { ref } from 'vue';

const text = ref<string>('');

const handleSubmit = async (e: Event) => {
  e.preventDefault();

  const data = {
    text: text.value,
  };

  console.log(data);
};
</script>

<template>
  <form @submit="handleSubmit" class="max-w-md mx-auto space-y-4">
    <div>テキスト</div>
    <textarea v-model="text" class="app-form-input"></textarea>
    <button type="submit" class="app-btn-primary">確認</button>
  </form>
</template>
