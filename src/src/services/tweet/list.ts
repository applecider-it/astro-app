import axios from 'axios';
import { getApiUrl } from '@/services/api/rest';

/** ツイート一覧 */
export async function getTweets() {
  const url = getApiUrl('/tweet');

  const res = await axios.get(url);

  return res.data;
}
