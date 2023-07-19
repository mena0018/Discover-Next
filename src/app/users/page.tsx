import { Metadata } from 'next';
import { getUsers } from '@/lib/api';
import UsersList from '@/components/User/List';

export const metadata: Metadata = {
  title: 'List of Users',
  description: 'Page displaying a list of all users',
};

export default async function UsersPage() {
  const users = await getUsers();

  return <UsersList users={users} />;
}
