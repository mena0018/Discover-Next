import { zUser, zUsers } from 'src/models/User';

export async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const userData = await res.json();

  return zUser.parse(userData);
}

export async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const usersData = await res.json();

  return zUsers.parse(usersData);
}
