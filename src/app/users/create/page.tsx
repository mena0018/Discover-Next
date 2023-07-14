import { Metadata } from 'next';
import Form from 'src/components/Form';

export const metadata: Metadata = {
  title: 'Create a User',
  description: 'Page permitting to create a user',
};

export default function page() {
  return (
    <section className='py-5 px-3 flex flex-col items-center gap-8'>
      <h1 className='text-center text-white text-4xl font-semibold tracking-wide'>Create a User</h1>
      <Form />
    </section>
  );
}
