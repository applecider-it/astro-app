import axios from 'axios';
import { getApiUrl } from '@/services/api/rest';

/** コメント追加 */
export async function storeComment(author: string, content: string) {
  const data = {
    author,
    content,
  };

  const url = getApiUrl('/comments/store');

  const res = await axios.post(url, data);
}
