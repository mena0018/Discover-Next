import UsersList from '@/components/UsersList';
import { getUsers } from 'src/services/api';

export default async function UsersPage() {
  const users = await getUsers();

  return <UsersList users={users} />;
}
