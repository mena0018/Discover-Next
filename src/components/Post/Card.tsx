import Link from 'next/link';
import { PostProps } from '@/models';

function Card({ post }: PostProps) {
  return (
    <div className='card w-96 bg-base-300 text-white min-h-[212px]'>
      <div className='card-body flex flex-col justify-between'>
        <h2 className='card-title'>
          Post n°
          <span className='badge badge-accent'>{post.id}</span>
        </h2>

        <div className='card-actions justify-end'>
          <Link href={`/posts/${post.id}`} className='btn btn-primary'>
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
