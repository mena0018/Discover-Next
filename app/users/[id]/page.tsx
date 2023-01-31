import { UsersParams } from 'types/UserType';
import UserDetail from 'components/UserDetail';
import { getUser, getUsers } from 'lib/api';

export async function generateStaticParams() {
  const users = await getUsers();

  return users.map((user) => ({ id: String(user.id) }));
}

export default async function UserPage({ params: { id } }: UsersParams) {
  const user = await getUser(id);

  return <UserDetail user={user} />;
}
