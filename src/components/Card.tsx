import React from 'react';
import User from '../types/UserType';
import Link from 'next/link';

type Props = {
  user: User;
};

function Card({ user }: Props) {
  return (
    <div className='card w-96 bg-base-300 text-white'>
      <div className='card-body'>
        <h2 className='card-title'>{user.name}</h2>
        <p>{user.phone}</p>
        <p>{user.email}</p>

        <div className='card-actions justify-end'>
          <Link href={`/users/${user.id}`} className='btn btn-primary'>
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
