import axios from 'axios';
import { getApiUrl } from '@/services/api/rest';

/** コメント一覧 */
export async function getComments() {
  const url = getApiUrl('/comments');

  const res = await axios.get(url);

  return res.data;
}
