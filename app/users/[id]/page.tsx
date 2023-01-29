// import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
// import Head from 'next/head';
// import User, { UserProps } from '@/types/UserType';
// import UserDetail from '@/components/UserDetail';

// export default function UserPage({ user }: UserProps) {
//   return (
//     <>
//       <Head>
//         <title>User Detail</title>
//         <meta name='description' content='Page detail of a user' />
//       </Head>

//       <section className='mt-10 w-full max-w-sm mx-auto flex flex-col items-center justify-center gap-6 px-3 md:p-0'>
//         <UserDetail user={user} />
//       </section>
//     </>
//   );
// }

// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
//   const id = context!.params!.id;

//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const user: User = await res.json();

//   return {
//     props: {
//       user,
//     },
//   };
// };

// // export const getStaticPaths: GetStaticPaths = async () => {
// //   const res = await fetch('https://jsonplaceholder.typicode.com/users');
// //   const data: User[] = await res.json();

// //   const paths = data.map((user: User) => ({
// //     params: { id: user.id.toString() },
// //   }));

// //   return {
// //     paths,
// //     fallback: false,
// //   };
// // };

import React from 'react';

export default function page() {
  return <div>page</div>;
}
