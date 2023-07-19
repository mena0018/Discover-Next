import { FC } from 'react';
import { Metadata } from 'next';
import Form from '@/components/Form/Form';

export const metadata: Metadata = {
  title: 'Create a User',
  description: 'Page permitting to create a post',
};

const page: FC = () => {
  return (
    <section className='py-5 px-3 flex flex-col items-center gap-8'>
      <h1 className='text-center text-white text-4xl font-semibold tracking-wide'>Create a Post</h1>
      <Form />
    </section>
  );
};

export default page;
