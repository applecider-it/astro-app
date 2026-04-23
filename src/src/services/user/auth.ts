import axios, { AxiosError } from 'axios';
import { getApiUrl } from '@/services/api/rest';

/** 認証ユーザー */
export const getMe = async () => {
  const url = getApiUrl('/auth/me');

  try {
    const res = await axios.get(url, {
      withCredentials: true,
    });

    return res.data;
  } catch (err: any) {
    if (err.response && err.response.status === 401) {
      return null;
    } else {
      throw err;
    }
  }
};

/** ログイン処理 */
export const sendLogin = async (email: string, password: string) => {
  const data = {
    email,
    password,
  };

  const url = getApiUrl('/auth/login');

  const res = await axios.post(url, data, {
    withCredentials: true,
  });

  return res.data;
};

/** ログアウト */
export const sendLogout = async () => {
  const url = getApiUrl('/auth/logout');

  const res = await axios.post(
    url,
    {},
    {
      withCredentials: true,
    },
  );

  return res.data;
};
