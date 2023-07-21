import { z } from 'zod';

export const zPost = z.object({
  id: z.number().optional(),
  userId: z.number(),
  title: z.string(),
  body: z.string(),
});
export type Post = z.infer<typeof zPost>;

export const zPosts = z.array(zPost);
