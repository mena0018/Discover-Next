import { FC } from 'react';
import { PostProps } from '@/models';
import Link from 'next/link';

const Card: FC<PostProps> = ({ post }) => {
  return (
    <div className='card w-96 bg-base-300 text-white min-h-[212px]'>
      <div className='card-body flex flex-col justify-between'>
        <h2 className='card-title'>
          Post <span className='badge badge-primary'>{post.id}</span>
        </h2>

        <div className='card-actions justify-end'>
          <Link href={`/posts/${post.id}`} className='btn btn-primary'>
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
