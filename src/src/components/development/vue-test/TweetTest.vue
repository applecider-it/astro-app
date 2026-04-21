<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { getTweets } from '@/services/tweet/list';
import { storeTweet } from '@/services/tweet/edit';

const content = ref<string>('');
const tweets = ref<any[]>();

/** 送信処理 */
const handleSubmit = async (e: Event) => {
  e.preventDefault();

  await storeTweet(content.value);

  content.value = '';

  await setList();
};

/** リスト設定 */
const setList = async () => {
  const rows = await getTweets();

  tweets.value = rows;
};

// 初期化時
onMounted(async () => {
  console.log('mounted');

  await setList();
});
</script>

<template>
  <div class="space-y-5">
    <form @submit="handleSubmit" class="space-y-4">
      <div>内容</div>
      <textarea v-model="content" class="app-form-input" required></textarea>
      <button type="submit" class="app-btn-primary">送信</button>
    </form>

    <div class="space-y-2">
      <div class="border-2 p-5" v-for="tweet in tweets" :key="tweet.id">
        <div>{{ tweet.id }}</div>
        <div>{{ tweet.content }}</div>
        <div>by {{ tweet.user_name }}</div>
      </div>
    </div>
  </div>
</template>
