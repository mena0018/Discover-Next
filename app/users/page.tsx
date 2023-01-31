import UsersList from 'components/UsersList';
import { getUsers } from 'lib/api';

export default async function UsersPage() {
  const users = await getUsers();

  return <UsersList users={users} />;
}
