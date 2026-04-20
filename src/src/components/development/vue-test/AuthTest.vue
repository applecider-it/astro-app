<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Props {
  apiHost: string;
}

const props = defineProps<Props>();

const email = ref<string>('test@localhost.com');
const password = ref<string>('testtest');

/** 認証ユーザー */
const handleMe = async (e: Event) => {
  const url = `${props.apiHost}/auth/me`;

  const res = await axios.get(url, {
    withCredentials: true,
  });

  console.log(res.data);
};

/** ログイン処理 */
const handleSubmit = async (e: Event) => {
  e.preventDefault();

  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);

  const url = `${props.apiHost}/auth/login`;

  const res = await axios.post(url, data, {
    withCredentials: true,
  });

  console.log(res.data);
};

/** ログアウト */
const handleLogout = async (e: Event) => {
  const url = `${props.apiHost}/auth/logout`;

  const res = await axios.post(
    url,
    {},
    {
      withCredentials: true,
    },
  );

  console.log(res.data);
};

// 初期化時
onMounted(async () => {});
</script>

<template>
  <div class="space-y-5">
    <form @submit="handleSubmit" class="space-y-4">
      <div>email</div>
      <input type="text" v-model="email" class="app-form-input" />
      <div>password</div>
      <input type="text" v-model="password" class="app-form-input" />
      <button type="submit" class="app-btn-primary">送信</button>
    </form>

    <div class="space-x-5">
      <button type="button" @click="handleMe" class="app-btn-primary">
        Me
      </button>
    </div>

    <div class="space-x-5">
      <button type="button" @click="handleLogout" class="app-btn-primary">
        Logout
      </button>
    </div>
  </div>
</template>
