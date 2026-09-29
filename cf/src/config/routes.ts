import type { Hono } from 'hono';
import type { AppHonoType } from '@/types/types';

import { tweetRoute } from '@/controllers/tweet';
import { commentRoute } from '@/controllers/comment';
import { authRoute } from '@/controllers/auth';
import { chatRoute } from '@/controllers/chat';

import { developmentRoute } from '@/controllers/development';

export function setRoutes(app: Hono<AppHonoType>) {
  // 動作確認用
  app.get('/', async (c) => {
    const message = 'Hello';
    return c.json({ message });
  });

  app.route('/tweet', tweetRoute);
  app.route('/comment', commentRoute);
  app.route('/auth', authRoute);
  app.route('/chat', chatRoute);

  app.route('/development', developmentRoute);
}
