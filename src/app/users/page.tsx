import UsersList from 'src/components/UsersList';
import { getUsers } from 'src/app/lib/api';

export default async function UsersPage() {
  const users = await getUsers();

  return <UsersList users={users} />;
}
