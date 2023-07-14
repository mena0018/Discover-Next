import { UsersParams } from 'src/models/User';
import UserDetail from 'src/components/UserDetail';
import { getUser, getUsers } from 'src/app/lib/api';

export async function generateStaticParams() {
  const users = await getUsers();

  return users.map((user) => ({ id: String(user.id) }));
}

export default async function UserPage({ params: { id } }: UsersParams) {
  const user = await getUser(id);

  return <UserDetail user={user} />;
}
