import axios from 'axios';
import { getApiUrl } from '@/services/api/rest';

/** ツイート追加 */
export async function storeTweet(content: string) {
  const data = {
    content,
  };

  const url = getApiUrl('/tweet/store');

  const res = await axios.post(url, data, {
    withCredentials: true,
  });

  return res.data;
}
