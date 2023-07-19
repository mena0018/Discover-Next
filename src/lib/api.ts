import { zPost, zPosts, zUser, zUsers } from '@/models';

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

export async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsData = await res.json();

  return zPosts.parse(postsData);
}

export async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const postsData = await res.json();

  return zPost.parse(postsData);
}
