'use client';

import User from '@/types/UserType';
import React from 'react';
import Card from './Card';

export default function UsersList({ users }: any) {
  const usersList = users.map((user: User) => <Card key={user.id} user={user} />);

  return (
    <>
      <h1 className='text-center text-white text-4xl font-semibold tracking-wide py-5'>
        List of Users
      </h1>

      <section className='max-w-7xl mx-auto my-8 px-3 flex items-center justify-center flex-wrap gap-5'>
        {usersList}
      </section>
    </>
  );
}
