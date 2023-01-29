import UsersList from '@/components/UsersList';
import User from '@/types/UserType';

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: User[] = await res.json();

  return data;
}

export default async function UsersPage() {
  const users = await getUsers();

  return <UsersList users={users} />;
}
