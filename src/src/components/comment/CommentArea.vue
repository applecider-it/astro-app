<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { getComments } from '@/services/comment/list';
import { storeComment } from '@/services/comment/edit';

const author = ref<string>('');
const content = ref<string>('');
const comments = ref<any[]>();

/** 送信処理 */
const handleSubmit = async (e: Event) => {
  e.preventDefault();

  await storeComment(author.value, content.value);

  author.value = '';
  content.value = '';

  await setList();
};

/** リスト設定 */
const setList = async () => {
  const rows = await getComments();

  comments.value = rows;
};

// 初期化時
onMounted(async () => {
  console.log('mounted');

  await setList();
});
</script>

<template>
  <div class="max-w-xl mx-auto space-y-8">
    <!-- 見出し -->
    <div>
      <h2 class="text-2xl font-semibold tracking-tight">コメント</h2>
      <p class="text-sm text-gray-500 mt-1">
        ご意見・ご感想など、お気軽にどうぞ
      </p>
    </div>

    <!-- フォーム -->
    <form
      @submit.prevent="handleSubmit"
      class="space-y-5 bg-white p-6 rounded-2xl shadow-sm border"
    >
      <div class="space-y-1">
        <label class="text-sm text-gray-600">お名前</label>
        <input
          type="text"
          v-model="author"
          class="app-form-input w-full"
          placeholder="例）山田 太郎"
          required
        />
      </div>

      <div class="space-y-1">
        <label class="text-sm text-gray-600">コメント</label>
        <textarea
          v-model="content"
          class="app-form-input w-full min-h-[120px]"
          placeholder="ひとことでも大歓迎です"
          required
        ></textarea>
      </div>

      <div class="text-right">
        <button type="submit" class="app-btn-primary px-5 py-2 rounded-lg">
          投稿する
        </button>
      </div>
    </form>

    <!-- コメント一覧 -->
    <div class="space-y-4">
      <div
        class="p-5 border rounded-2xl bg-white shadow-sm hover:shadow-md transition"
        v-for="comment in comments"
        :key="comment.id"
      >
        <div
          class="flex items-center justify-between text-sm text-gray-400 mb-2"
        >
          <span>#{{ comment.id }}</span>
          <span>{{ comment.author }}</span>
        </div>

        <p class="text-gray-800 leading-relaxed">
          {{ comment.content }}
        </p>
      </div>
    </div>
  </div>
</template>
