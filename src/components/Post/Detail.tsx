'use client';

import { FC } from 'react';
import { PostProps } from '@/models';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Blog from '/public/blog.webp';

const Detail: FC<PostProps> = ({ post }) => {
  const router = useRouter();

  return (
    <div className='mt-10 w-full max-w-sm mx-auto flex flex-col items-center justify-center gap-6 px-3 md:p-0'>
      <div className='card bg-base-100 shadow-xl'>
        <figure>
          <Image src={Blog} alt='Shoes' priority={true} className='max-h-72 object-cover' />
        </figure>

        <div className='card-body flex gap-6'>
          <div className='flex justify-between'>
            <h2 className='card-title'>Post n° {post.id}</h2>
            <Link href={`/users/${post.userId}`} className='badge badge-accent'>
              written by
            </Link>
          </div>

          <div className='rounded-full outline p-2'>
            <p className='font-italic text-center'>{post.title}</p>
          </div>
        </div>
      </div>

      <button onClick={() => router.back()} className='btn btn-primary btn-wide'>
        Go back
      </button>
    </div>
  );
};

export default Detail;
