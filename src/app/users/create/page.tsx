import { Metadata } from 'next';
import Form from 'src/components/Form';

export const metadata: Metadata = {
  title: 'Create a User',
  description: 'Page permitting to create a user',
};

export default function page() {
  return (
    <section className='max-w-6xl mx-auto my-8 px-3 flex items-center justify-center'>
      <Form />
    </section>
  );
}
