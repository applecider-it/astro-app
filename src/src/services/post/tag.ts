import { getCollection } from 'astro:content';

/** タグ一覧取得 */
export async function getTags() {
  const posts = await getCollection('post');

  const flatTagsArr = posts.flatMap((post) => post.data.tags ?? []);
  const uniqueTagsSet = new Set(flatTagsArr);
  const uniqueTagsArr = [...uniqueTagsSet];
  const sortedTagsArr = uniqueTagsArr.sort((a, b) => a.localeCompare(b));

  return sortedTagsArr;
}

/** タグを保有した記事一覧取得 */
export async function getTagPosts(tag: string) {
  const posts = (await getCollection('post'))
    .filter((post) => post.data.tags?.includes(tag))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return posts;
}
