import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import User from '@/types/UserType';
import Placeholder from '/public/placeholder.jpg';

type Props = {
  user: User;
};

function User({ user }: Props) {
  return (
    <>
      <Head>
        <title>User Detail</title>
        <meta name='description' content='Page detail of a user' />
      </Head>

      <div className='mt-10 w-full max-w-sm mx-auto flex flex-col items-center justify-center gap-6 px-3 md:p-0'>
        <div className='card bg-base-100 shadow-xl'>
          <figure>
            <Image src={Placeholder} alt='Shoes' className='max-h-72 object-cover' />
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
      </div>
    </>
  );
}

export default User;

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const id = context!.params!.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: User = await res.json();

  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: User[] = await res.json();

  const paths = data.map((user: User) => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
