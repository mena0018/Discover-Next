import Link from 'next/link';
import { LinkProps } from '@/models';

export default function LinkItem({ name, route, isPost }: LinkProps) {
  return (
    <li>
      <Link href={route} className='btn btn-ghost normal-case text-xl'>
        {name}
        <svg
          className='fill-current'
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
        >
          <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
        </svg>
      </Link>
      <ul className='p-2 bg-neutral z-10'>
        <li>
          <Link href={route} className='btn btn-ghost normal-case text-xl'>
            List
          </Link>
        </li>

        {isPost && (
          <li>
            <Link href={`${route}/create`} className='btn btn-ghost normal-case text-xl'>
              New
            </Link>
          </li>
        )}
      </ul>
    </li>
  );
}
