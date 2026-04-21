import axios from 'axios';
import { getApiUrl } from '@/services/api/rest';

/** コメント追加 */
export async function storeComment(author: string, content: string) {
  const data = {
    author,
    content,
  };

  console.log(data);

  const url = getApiUrl('/comments/store');

  const res = await axios.post(url, data);

  console.log(res.data);
}
