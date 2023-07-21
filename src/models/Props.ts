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
  errors: FieldErrors;
  isNumberField?: boolean;
  register: (property: keyof Post, params: RegisterOptions | any) => {};
};
