import Image from 'next/image';
import Avatar from '/public/avatar.jpg';
import Link from 'next/link';
import { UserProps } from '@/types/UserType';

export default function UserDetail({ user }: UserProps) {
  return (
    <section className='mt-10 w-full max-w-sm mx-auto flex flex-col items-center justify-center gap-6 px-3 md:p-0'>
      <div className='card bg-base-100 shadow-xl'>
        <figure>
          <Image src={Avatar} alt='Shoes' priority={true} className='max-h-72 object-cover' />
        </figure>

        <div className='card-body'>
          <h2 className='card-title'>
            {user.name}
            <div className='badge badge-secondary'>NEW</div>
          </h2>
          <p>{user.company.name}</p>
          <div className='card-actions justify-end mt-4'>
            <div className='badge badge-outline'>{user.website}</div>
            <div className='badge badge-outline'>{user.email}</div>
          </div>
        </div>
      </div>

      <Link href='/users' className='btn btn-primary btn-wide'>
        Go back
      </Link>
    </section>
  );
}
