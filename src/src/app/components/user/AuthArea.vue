<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getMe, sendLogin, sendLogout } from '@/services/user/auth';

const email = ref<string>('test@localhost.com');
const password = ref<string>('testtest');
const isLogin = ref(false);

/** セットアップ */
const setup = async () => {
  const res = await getMe();

  isLogin.value = !!res;

  console.log(res);
  console.log(res?.user);
};

/** ログイン処理 */
const handleSubmit = async (e: Event) => {
  e.preventDefault();

  const res = await sendLogin(email.value, password.value);

  console.log(res);

  if (res.ok) {
    setup();
  }
};

/** ログアウト */
const handleLogout = async (e: Event) => {
  const res = await sendLogout();

  console.log(res);

  setup();
};

/** Google認証 */
const handleGoogle = async (e: Event) => {
  const host = window.App.config.apiHost;

  const url = `${host}/auth/google`;

  console.log(url);

  location.href = url;
};

// 初期化時
onMounted(async () => {
  setup();
});
</script>

<template>
  <div v-if="isLogin">
    <div class="space-x-5">
      <button type="button" @click="handleLogout" class="app-btn-primary">
        Logout
      </button>
    </div>
  </div>
  <div v-else>
    <div class="space-y-5">
      <form @submit="handleSubmit" class="space-y-4">
        <div>email</div>
        <input type="text" v-model="email" class="app-form-input" />
        <div>password</div>
        <input type="text" v-model="password" class="app-form-input" />
        <button type="submit" class="app-btn-primary">メール認証</button>
      </form>

      <div class="space-x-5">
        <button type="button" @click="handleGoogle" class="app-btn-primary">
          Google認証
        </button>
      </div>
    </div>
  </div>
</template>
