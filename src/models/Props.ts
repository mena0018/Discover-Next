import { FieldErrors, RegisterOptions } from 'react-hook-form';
import { Post } from './Post';
import { User } from './User';

export type UserProps = {
  user: User;
};

export type UsersProps = {
  users: User[];
};

export type ParamsID = {
  params: {
    id: string;
  };
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

export type FieldProps = {
  property: keyof Post;
  errors: FieldErrors | any;
  isNumberField?: boolean;
  register: (property: keyof Post, params: RegisterOptions | any) => {};
};

export type Notification = {
  text: string;
  color: 'green' | 'red';
};
