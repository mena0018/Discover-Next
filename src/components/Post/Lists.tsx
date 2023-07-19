import Card from './Card';
import { Post, PostsProps } from '@/models';

export default function PostsList({ posts }: PostsProps) {
  const postsList = posts.map((post: Post) => <Card key={post.id} post={post} />);

  return (
    <section className='py-5 px-3'>
      <h1 className='text-center text-white text-4xl font-semibold tracking-wide'>List of Posts</h1>

      <div className='max-w-7xl mx-auto my-8 flex items-center justify-center flex-wrap gap-5'>
        {postsList}
      </div>
    </section>
  );
}
