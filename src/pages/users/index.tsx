import Card from '../../components/Card';
import User from '../../types/UserType';
import { GetStaticProps } from 'next';

type Props = {
  data: User[];
};

function UsersPage({ data }: Props) {
  const users = data.map((user: User) => <Card key={user.id} user={user} />);

  return (
    <>
      <h1 className='text-center text-white text-4xl font-semibold tracking-wide py-5'>
        List of Users
      </h1>
      <section className='max-w-7xl mx-auto my-8 px-3 flex items-center justify-center flex-wrap gap-5'>
        {users}
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: User[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default UsersPage;
