import { UsersParams } from 'src/models/User';
import UserDetail from 'src/components/UserDetail';
import { getUser, getUsers } from '@/lib/api';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Detail',
  description: 'Page detail of a user',
};

export async function generateStaticParams() {
  const users = await getUsers();

  return users.map((user) => ({ id: String(user.id) }));
}

export default async function UserPage({ params: { id } }: UsersParams) {
  const user = await getUser(id);

  return <UserDetail user={user} />;
}
