import { Post } from './Post';
import { User } from './User';

export type UserProps = {
  user: User;
};

export type UsersProps = {
  users: User[];
};

export type UsersParams = {
  params: {
    id: string;
  };
};

export type UserPost = {
  id: number;
  name: string;
  tel: number;
};

export type LinkProps = {
  name: string;
  route: string;
  isPost?: boolean;
};

export type PostsProps = {
  posts: Post[];
};

export type PostProps = {
  post: Post;
};
