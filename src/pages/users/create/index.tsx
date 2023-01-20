import Head from 'next/head';
import Form from '../../../components/Form';

function page() {
  return (
    <>
      <Head>
        <title>Create a User</title>
        <meta name='description' content='Page permitting to create a user' />
      </Head>

      <section className='max-w-6xl mx-auto my-8 px-3 flex items-center justify-center'>
        <Form />
      </section>
    </>
  );
}

export default page;
