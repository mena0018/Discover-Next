import { Metadata } from 'next';
import { getPosts } from '@/lib/api';
import PostsList from '@/components/Post/List';

export const metadata: Metadata = {
  title: 'List of Posts',
  description: 'Page displaying a list of all posts',
};

export default async function PostsPage() {
  const posts = await getPosts();
  return <PostsList posts={posts} />;
}
