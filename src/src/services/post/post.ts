import { getCollection } from 'astro:content';
import type { Post } from '@/types/types';

/** 記事一覧取得 */
export async function getPosts() {
  const posts: Post[] = await getCollection('post');

  //console.log(posts);

  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return posts;
}
