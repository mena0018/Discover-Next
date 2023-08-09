import { z } from 'zod';

export const zPost = z.object({
  id: z.number().optional(),
  userId: z.number(),
  title: z.string().min(5).max(100),
  body: z.string().min(20).max(500),
});
export type Post = z.infer<typeof zPost>;

export const zPosts = z.array(zPost);

export type PostsProps = {
  posts: Post[];
};

export type PostProps = {
  post: Post;
};
