import { ParamsID } from '@/models';
import PostDetail from '@/components/Post/Detail';
import { getPost, getPosts } from '@/lib/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Detail',
  description: 'Page detail of a user',
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ id: String(post.id) }));
}

export default async function PostPage({ params: { id } }: ParamsID) {
  const post = await getPost(id);
  return <PostDetail post={post} />;
}
