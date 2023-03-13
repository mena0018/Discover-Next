import React from 'react';

export default function LoadingSkeleton() {
  return (
    <section className='py-5 px-3'>
      <h1 className='text-center text-white text-4xl font-semibold tracking-wide'>List of Users</h1>

      <div className='max-w-7xl mx-auto my-8 flex items-center justify-center flex-wrap gap-5'>
        {[...Array(10).keys()].map((item: number) => (
          <div
            key={item}
            className='card w-96 bg-base-300 h-52 text-white animate-pulse'
            style={{ animationDelay: `${item * 0.05}s`, animationDuration: '1s' }}
          />
        ))}
      </div>
    </section>
  );
}
