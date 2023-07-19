import { FC } from 'react';
import { User, UsersProps } from '@/models';
import Card from './Card';

const List: FC<UsersProps> = ({ users }) => {
  const usersList = users.map((user: User) => <Card key={user.id} user={user} />);

  return (
    <section className='py-5 px-3'>
      <h1 className='text-center text-white text-4xl font-semibold tracking-wide'>List of Users</h1>

      <div className='max-w-7xl mx-auto my-8 flex items-center justify-center flex-wrap gap-5'>
        {usersList}
      </div>
    </section>
  );
};

export default List;
