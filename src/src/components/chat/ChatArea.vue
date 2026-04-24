<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ChatClient from '@/services/chat/ChatClient';

const message = ref<string>('メッセージテスト');
const messages = ref<any[]>([]);

let chatClient: ChatClient | null = null;

/** 送信処理 */
const handleSubmit = async (e: Event) => {
  e.preventDefault();

  chatClient!.sendMessage(message.value);
};

// 初期化時
onMounted(async () => {
  console.log('mounted');

  chatClient = new ChatClient((msg) => {
    console.log(msg);

    messages.value = [msg, ...messages.value]
  });

  console.log(window.App.config.apiHost);
});
</script>

<template>
  <div class="space-y-5">
    <form @submit="handleSubmit" class="space-y-4">
      <div>内容</div>
      <textarea v-model="message" class="app-form-input" required></textarea>
      <button type="submit" class="app-btn-primary">送信</button>
    </form>

    <div class="border border-gray-700 p-2 mb-2 h-80 mt-5 overflow-y-auto space-y-2">
      <div v-for="(msg) in messages" :key="msg">
        <div>{{ msg }}</div>
      </div>
    </div>
  </div>
</template>
