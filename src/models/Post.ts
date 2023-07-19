import { z } from 'zod';

export const zPost = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});
export type Post = z.infer<typeof zPost>;

export const zPosts = z.array(zPost);
