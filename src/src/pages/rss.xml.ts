import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPosts } from '@/services/post/post';

// RSS生成用
export const GET: APIRoute = async (context) => {

  const posts = await getPosts();

  return rss({
    title: 'サイトブログ',
    description: 'お知らせ',
    site: context.site!, // siteは必須なので ! で型補強
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/article/${post.slug}/`,
    })),
  });
};