<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { getApiUrl } from '@/services/api/rest';

interface Props {
  apiHost: string;
}

const props = defineProps<Props>();

const author = ref<string>('');
const content = ref<string>('');
const comments = ref<any[]>();

/** 送信処理 */
const handleSubmit = async (e: Event) => {
  e.preventDefault();

  const data = {
    author: author.value,
    content: content.value,
  };

  console.log(data);

  const url = getApiUrl('/comments/store');

  const res = await axios.post(url, data);

  console.log(res.data);

  author.value = '';
  content.value = '';

  await setList();
};

/** リスト設定 */
const setList = async () => {
  console.log(props.apiHost);

  const url = getApiUrl('/comments');

  const res = await axios.get(url);

  console.log(res.data);

  comments.value = res.data;
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
      <div>名前</div>
      <input type="text" v-model="author" class="app-form-input" required />
      <div>内容</div>
      <textarea v-model="content" class="app-form-input" required></textarea>
      <button type="submit" class="app-btn-primary">送信</button>
    </form>

    <div class="space-y-2">
      <div class="border-2 p-5" v-for="comment in comments" :key="comment.id">
        <div>{{ comment.id }}</div>
        <div>{{ comment.author }}</div>
        <div>{{ comment.content }}</div>
      </div>
    </div>
  </div>
</template>
