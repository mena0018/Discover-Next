import Link from 'next/link';
import { PostProps } from '@/models';
import Image from 'next/image';
import Blog from '/public/blog.webp';

export default function Detail({ post }: PostProps) {
  return (
    <section className='mt-10 w-full max-w-sm mx-auto flex flex-col items-center justify-center gap-6 px-3 md:p-0'>
      <div className='card bg-base-100 shadow-xl'>
        <figure>
          <Image src={Blog} alt='Shoes' priority={true} className='max-h-72 object-cover' />
        </figure>

        <div className='card-body flex gap-6'>
          <h2 className='card-title'>
            Post n° {post.id}
            <div className='badge badge-secondary'>NEW</div>
          </h2>

          <div className='font-italic rounded-full outline text-center'>{post.title}</div>
        </div>
      </div>

      <Link href={`/users/${post.userId}`} className='btn btn-primary btn-wide'>
        Author
      </Link>
    </section>
  );
}
